import React, { useState } from 'react'


const Button = ({selected, setSelected, handleClick}) => (
    <button onClick={handleClick}> Next anecdote </button>
)

const App = () => {

  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  const [selected, setSelected] = useState(0)
  

  function getRandomArbitrary() {
    const random = Math.floor(Math.random() * 6) + 1;
    console.log("random number", random)
    return random;

    }
 
  
  const handleClick = () => {
    // console.log(anecdotes)
    console.log("button!!!")
    setSelected(getRandomArbitrary()) // here what should be randomly manipulated is anecdote´s index
    
  }


  return (
    <div>
      {anecdotes[selected]} {/*anecdotes index starting in 0 */}
      <Button handleClick={() => handleClick()} selected={selected} setSelected={selected}/>
      {/* <button onClick={handleClick}> Click for random anecdote! </button> */}
    </div>
  )
}

export default App