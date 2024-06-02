import React from 'react'
import { useState } from 'react'
// import { useFormik } from 'formik';
// import * as yup from 'yup';

const Card = () => {



// const validationSchema = yup.object().shape({
//   holderName: yup.string().required('cannot be empty'),
//   numValues: yup.string().required('cannot be empty'),
//   month: yup.string().required("can't be empty"),
//   year: yup.string().required("can't be empty"),
//   cvc: yup.string().required("can't be empty"),
// });




//   const formik = useFormik({
//     initialValues: {
//       numValues: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0",
//       holderName: "JANE APPLESEED",
//       month: "00",
//       year: "00",
//       cvc: "000",
//     },
//     validationSchema: validationSchema,
//     onSubmit: (values) => {
//       console.log(values);
//       if (validationSchema){
//         alert("success")
//         window.location.reload();
//       }
//     },
//   });

const [state, setState] = useState(
  {
    numValues: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0",
    holderName: "CARDHOLDER NAME",
    month: "00",
    year: "00",
    cvc: "000",
  }
)

const [err, setErr] = useState(
  {
    numError: "",
    holderameError: "",
    monthError: "",
    yearError: "",
    cvcError: "",
  }
)

const [finalErr, setFinalErr] = useState(
  {
    holderName: "",
    numValues: "",
    month: "",
    year: "",
    cvc: "",
  }
  )
const [mssg1, setMssg1] = useState(
  {
    message1: false,
  }
  )
const [mssg2, setMssg2] = useState(
  {
    message2: false,
  }
  )
const [mssg3, setMssg3] = useState(
  {
    message3: false,
  }
  )
const [mssg4, setMssg4] = useState(
  {
    message4: false,
  }
  )





const confirm = ()=>{

  setMssg1(false)

  if ( !finalErr.numValues ){
    setMssg1( { message1: "cannot be blank"})
  }
  if ( !finalErr.holderName ){
    setMssg2( { message2: "cannot be blank"})
  }
  if ( !finalErr.month || !finalErr.year){
    setMssg3( { message3: "can't be blank"})
  }
  if ( !finalErr.cvc ){
    setMssg4( { message4: "can't be blank"})
  }
  // setFinalErr( validate(state))
  // const mesage = validate(state[0])
  // console.log(mesage)
}

// const validate = (values)=>{

//   const error = {};

//   if ( !values.holderName){
//     error.holderName = "cannot be blank"
//   }

// }




const numberChange = (e)=>{
  const numValues = e.target.value.replace(/(.{4})/g, '$1 ')
  setMssg1(false);
  setFinalErr( { numValues: numValues})
  // console.log(numValues)
  if ( numValues ){
    setState( {...state, numValues: numValues } )
  }else{
    setState( { ...state, numValues: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0" } )
  }
  
  if ( numValues.length > 20 ){
    setErr( { numError: "there should not be more than 16 characters"})
  }
  if ( numValues.length <= 20 ){
    setErr( { numError: false})
  }
}

const nameChange = (e)=>{
  const nameValues = e.target.value
  setMssg2(false)
  if ( nameValues ){
    setState( {...state, holderName: nameValues.toUpperCase() } )
  }else{
    setState( { ...state, holderName: "CARDHOLDER NAME" } )
  }
  setFinalErr( { holderName: nameValues})
  // console.log(nameValues)
  
}

const monthChange = (e)=>{
  const monthValues = e.target.value
  setMssg3(false)
  // console.log(nameValues)
  if ( monthValues ){
    setState( {...state, month: monthValues } )
  }else{
    setState( { ...state, month: "00" } )
  }
  
}

const yearChange = (e)=>{
  const yearValues = e.target.value
  // console.log(nameValues)
  if ( yearValues ){
    setState( {...state, year: yearValues } )
  }else{
    setState( { ...state, year: "00" } )
  }
}

const cvcChange = (e)=>{
  const cvcValues = e.target.value
  setMssg4(false)
  // console.log(nameValues)
  if ( cvcValues ){
    setState( {...state, cvc: cvcValues } )
  }else{
    setState( { ...state, cvc: "000" } )
  }

  if ( cvcValues.length > 3 ){
    setErr( { cvcError: "can't be more than 3 characters" } )
  }
  if ( cvcValues.length <= 3 ){
    setErr( { cvcError: false})
  }
}





  return (
    <>
        <div className='cardHolder'>
            <div className='leftside'></div>
            <div className='rightside'></div>
        </div>

        <div className='centercard'>
          <div className='cardsDiv'>
            <div className='upCard'>
              <div className='topupCard'>
                <div className='firstCircle'></div>
                <div className='secondCircle'></div>
              </div>
              <div className='bottomupCard'>
                <h3> {state.numValues} </h3>
                <div className='downbottomupCard'>
                  <p> { state.holderName } </p>
                  <p> { state.month }/{ state.year } </p>
                </div>
              </div>
            </div>

            <div className='downCard'>
              <div className='blackline'></div>
              <div className='underBlackline'>
                <div className='topofunderBlackline'><p> { state.cvc } </p></div>
                <div></div>
              </div>
            </div>
          </div>

          <div className='formDiv'>
            <div className='theForm'>
              <div className='theInput'>
                <p>CARDHOLDER NAME</p>
                <input 
                  type='text' 
                  placeholder='e.g Jane Appleseed' 
                  onChange={nameChange} 
                  style={ mssg2.message2 ? { border: "1px solid red" } : null }
                  />
                {
                  mssg2.message2 ? <p style={{color: "red", fontSize: "12px"}}> { mssg2.message2 } </p> : null
                }
              </div>
              <div className='theInput'>
                <p>CARD NUMBER</p>
                <input 
                  type='number' 
                  placeholder='e.g 1234 5678 9123 0000' 
                  onChange={numberChange} 
                  style={ err.numError ? { border: "1px solid red" } : mssg1.message1 ? { border: "1px solid red" } : null }
                  maxLength={16}
                  />
                {
                  err.numError ? <p style={{color: "red", fontSize: "12px"}}> { err.numError } </p> :  mssg1.message1 ? <p style={{color: "red", fontSize: "12px"}}> { mssg1.message1 } </p> : null
                }
              </div>
              <div className='lastInput'>
                <div className='expirydate'>
                  <p>EXP. DATE (MM/YY)</p>
                  <div className='expiredateInput'>
                    <input type='number' placeholder='MM' onChange={monthChange} style={ mssg3.message3 ? { border: "1px solid red" } : null }/>
                    <input type='number' placeholder='YY' onChange={yearChange} style={ mssg3.message3 ? { border: "1px solid red" } : null }/>
                  </div>
                    {
                      mssg3.message3 ? <p style={{color: "red", fontSize: "12px"}}> { mssg3.message3 } </p> : null
                    }
                </div>
                <div className='cvc'>
                  <p>CVC</p>
                  <input type='number' placeholder="e.g. 123" onChange={cvcChange} style={ mssg4.message4 ? { border: "1px solid red" } : null }/>
                  {
                    err.cvcError ? <p style={{color: "red", fontSize: "12px"}}> { err.cvcError } </p> : mssg4.message4 ? <p style={{color: "red", fontSize: "12px"}}> { mssg4.message4 } </p> : null
                  }
                </div>
              </div>
              <button onClick={ confirm }>Confirm</button>
            </div>
          </div>
        </div>
    </>
  )
}

export default Card
