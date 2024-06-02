// import React, {useState} from 'react'
// import Redux from './component/Redux'
// import "./component/style.css"

// const App = () => {

// const [state, setState] = useState([])

// const changeImage = (e)=>{
// setState(URL.createObjectURL(e.target.files[0]))

// }


//   return (
//     <>
//       <div className='App'>
//         <div className='box'>
//           <img src={state} />
//         </div>
//         <input type='file'  onChange={changeImage}/>
//       </div>
//     </>
//   )
// }

// export default App






// import React, {useState} from 'react'
// import Redux from './component/Redux'
// import "./component/style.css"

// const App = () => {

// const [state, setState] = useState([])
// const [add, setAdd] = useState()

// const colours = [ "red", "green", "yellow", "blue", "purple", "brown", "aqua", "orange", "pink", "aquamarine"]

// const handleChange = (e)=>{

//   const values=e.target.value
// // console.log(values)
// setAdd(values)
// }
// const addName = ()=>{
//   const object = {Input:add,emm:emm}
//   setState([...state, object])
  
// }

// const the = Math.random()
//   const change = Math.floor(the * colours.length)
//   const emm = colours[change]
//   // console.log(emm)
//   // console.log(change)


//   return (
//     <>
//       <div className='App'>
//         <div className='inputdiv'>
//           <input type="text" placeholder='input your name' onChange={handleChange}/>
//           <button onClick={addName}>Add Name</button> 
//         </div>
//         <div className='result'>
//           {state.map((prop)=>(
//             <div className='circle' style={{backgroundColor: prop.emm}}>{prop.Input[0]}</div>
//           ))}
//         </div>       
//       </div>
//     </>
//   )
// }

// export default App


import React from 'react';
import Card from "./component/Card"
import "./component/style.css"



const App = ()=>{

  return (

    <>

      <div className='App3'>
        <Card/>
      </div>

    </>
  )
}

export default App