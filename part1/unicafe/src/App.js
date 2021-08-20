import React, {useState} from 'react'

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}> {text} </button>
  );

const Statistics = ({text, good, neutral, bad, total}) => (
   <p>{text} {good} {neutral} {bad} {total}</p>
  );

const Average = ({average, total, text}) => (
     <p>{text} {average / total}</p>
  );

  const PositiveFeedback = ({good, total, text}) => (
    <p>{text} {good / total * 100}</p>
 );


const App = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0);
  // const [percentage, setPercentage] = useState(0);
  
  const handleGoodFeedback = () => {
      setGood(good +1);
      setTotal(total +1)
      setAverage(average +1);
      console.log('Congratulations! You have recieved a good feedback on ' + new Date())
    }
    
  const handleNeutralFeedback = () => {
    setNeutral(neutral +1);
    setTotal(total +1)
    setAverage(average);
    console.log('Neutral customer´s feedback on ' + new Date())
  }

  const handleBadFeedback = () => {
    setBad(bad +1);
    setTotal(total +1)
    setAverage(average -1)
    console.log('Watch out! Bad customer´s feedback on ' + new Date())
  }

  return (
    <>
      <h1>Give us your feedback!</h1>
      <Button handleClick={handleGoodFeedback} text='Good'/>
      <Button handleClick={handleNeutralFeedback} text='Neutral'/>
      <Button handleClick={handleBadFeedback} text='Bad' />
      <h1>Statistics</h1>
      <Statistics text='Good:' good={good} />
      <Statistics text='Neutral:' neutral={neutral} />
      <Statistics text='Bad:' bad={bad} />
      <Statistics text='All:' total={total} />
      <Average text='Average:' average={average} setAverage={setAverage} total={total} setTotal={setTotal}/>
      <PositiveFeedback text='Positives:' good={good} total={total} />
    </>
  )
}

export default App;
