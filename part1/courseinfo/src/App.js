import React from 'react'

const Header= (props) => {
  //console.log("From Header component", props.course.name)
   return (
     <>
       <h1>{props.course.name}</h1>
     </>
   )
 }

const Part = (props) => {
  //console.log("From Part component", props);
  return (
    <>
          <p> {props.part1} {props.part2} {props.part3}: {props.exercises1} {props.exercises2} {props.exercises3} </p>
    </>
  )

}

const Content = (props) => {
  //console.log("From Content component", props.course.parts[0].name);
  
  const partOfCourse = [props.course.parts[0].name, props.course.parts[1].name, props.course.parts[2].name];
  const numberOfExercises = [props.course.parts[0].exercises, props.course.parts[1].exercises, props.course.parts[2].exercises];
  //console.log(partOfCourse);
  //console.log(numberOfExercises);

    return (
      <>
        <Part part1={partOfCourse[0]} exercises1={numberOfExercises[0]} /> 
        <Part part2={partOfCourse[1]} exercises2={numberOfExercises[1]} /> 
        <Part part3={partOfCourse[2]} exercises3={numberOfExercises[2]} />        
     </>
   )
 }


 const Total = (props) => {
   //console.log("From Total component", props.parts[0].exercises)
   const exercisesSum = (props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises)
   //console.log(exercisesSum);
   return (
     <>
      <p>Number of exercises: {exercisesSum}</p>
     </>
   )
 }



const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  
  //console.log("Accesig data from course object", course.parts[0].name)
  return (
    <div>
      <Header course= {course} />
      <Content course= {course}/>
      <Total course= {course}  />
    </div>
  )
}

export default App