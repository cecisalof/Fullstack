import React, {useState} from 'react'

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}> {text} </button>
);

const Statistics = ({text, good, neutral, bad, total}) => {
  return(
   <p>{text} {good} {neutral} {bad} {total}</p>
  )
}

const App = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  
  const handleFeedback = () => {
      setGood(good +1);
      console.log('Congratulations! You have recieved a good feedback on ' + new Date())
    }
    
  const handleNeutralFeedback = () => {
    setNeutral(neutral +1);
    console.log('Neutral customer´s feedback on ' + new Date())
  }

  const handleBadFeedback = () => {
    setBad(bad +1);
    console.log('Watch out! Bad customer´s feedback on ' + new Date())
  }

  return (
    <>
      <h1>Give us your feedback!</h1>
      <Button handleClick={handleFeedback} text='Good'/>
      <Button handleClick={handleNeutralFeedback} text='Neutral'/>
      <Button handleClick={handleBadFeedback} text='Bad' />
      <h1>Statistics</h1>
      <Statistics text='Good' good={good} />
      <Statistics text='Neutral' neutral={neutral} />
      <Statistics text='Bad' bad={bad} />
      <Statistics text='All' total={good + bad + neutral}/>
    </>
  )
}

export default App;
