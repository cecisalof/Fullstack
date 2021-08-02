import React from 'react'

/*
Refactor the code in 3 componentS:
Header: renders the name of the course
Content: renders the parts and their number of exercises
Total: renders the total number of exercises.

All the data remain in App.js file so the data will be passed to the components as props
*/
 
const Header= (props) => {
   return (
     <>
       <h1>{props.course}</h1>
     </>
   )
 }

const Part = (props) => {
  // console.log(props);
return (
  <>
         <p> {props.part1} {props.part2} {props.part3}: {props.exercises1} {props.exercises2} {props.exercises3} </p>
  </>
)

}

const Content = (props) => {
  
    return (
      <>
        {/* <Part part1={props.part1} part2={props.part2} part3={props.part3} exercises1={props.exercises1} exercises2={props.exercises2} exercises3={props.exercises3}/> */}
        <Part part1={props.part1} exercises1={props.exercises1} />
        <Part part2={props.part2} exercises2={props.exercises2} />
        <Part part3={props.part3} exercises3={props.exercises3} />
     </>
   )
 }


 const Total = (props) => {
   return (
     <>
      <p>Number of exercises: {props.count}</p>
     </>
   )
 }



const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course ={course}/>
      <Content part1={part1} part2={part2} part3={part3} exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>
      <Total count ={exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

export default App