import React, { useState } from 'react'


const Button = ({selected, setSelected, handleClick, text}) => (
    <button onClick={handleClick}> {text} </button>
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
  

  function getRandomNumber() {
    const random = Math.floor(Math.random() * 6) + 1;
    console.log("random number", random)
    return random;

    }

    function getVote(props) {
      //console.log(props);
      const copyAnecdotes = { ...props }
      //console.log(copyAnecdotes)
      //console.log(selected)
      let vote = 0;
      copyAnecdotes.forEach( anecdote => {
        console.log(anecdotes)
        // let vote = 0;
        copyAnecdotes[selected] === anecdote ? vote += 1 : vote=0;
        //console.log(vote)
      }) 
     

      // if(anecdotes[])
      return 'This anecdote has'+ {vote} + 'votes';
  
      }
  
  const handleClick = (props) => {
    //console.log(props)
    props === 'anecdote' ? setSelected(getRandomNumber()) : getVote(anecdotes);// here what should be randomly manipulated is anecdote´s index
  }


  return (
    <div>
      {anecdotes[selected]} {/*anecdotes index starting in 0 */}
      <Button text={'Vote'} anecdotes={anecdotes} handleClick={() => handleClick('vote')} selected={selected} setSelected={selected}/>
      <Button text={'Next anecdote'} handleClick={() => handleClick('anecdote')} selected={selected} setSelected={selected}/>
      {/* <button onClick={handleClick}> Click for random anecdote! </button> */}
    </div>
  )
}

export default App;