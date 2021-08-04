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
  console.log("From Part component", props);
  return (
    <>
          <p> {props.part1} {props.part2} {props.part3}: {props.exercises1} {props.exercises2} {props.exercises3} </p>
    </>
  )

}

const Content = (props) => {
  console.log("From Content component", props);
 
  const partOfCourse = [props.part1, props.part2, props.part3];
  const numberOfExercises = [props.exercises1, props.exercises2, props.exercises3];

  const [one, two, three ] = partOfCourse; // practicing destructuring assigment 

    return (
      <>
        <Part part1={one} exercises1={numberOfExercises[0]} />
        <Part part2={two} exercises2={numberOfExercises[1]} />
        <Part part3={three} exercises3={numberOfExercises[2]} />
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
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course ={course}/>
      <Content part1={part1.name} exercises1={part1.exercises}
               part2={part2.name} exercises2={part2.exercises}
               part3={part3.name} exercises3={part3.exercises} />
      <Total count ={part1.exercises + part2.exercises + part3.exercises}/>
    </div>
  )
}

export default App