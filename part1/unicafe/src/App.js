import React, {useState} from 'react'

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}> {text} </button>
  );

const Statistics = ({good, neutral, bad, total, average, percentage}) => {
  return(
    (total !== 0 ?
    <table>
      <tbody>
        <Statistic text='Good:' value={good} />
        <Statistic text='Neutral:' value={neutral} />
        <Statistic text='Bad:' value={bad} />
        <Statistic text='All:' value={total} />
        <Statistic text='Average:' value={average} />
        <Statistic text='Positives:' value={percentage} />
      </tbody>
   </table>
   : <h5> No feedback given yet! </h5>)
   );
}

const Statistic = ({text, value, unit}) => ( 
    <tr>
      <td> {text} </td> 
      <td> {value}</td>
    </tr>     
  );
 
const App = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const total = good + neutral + bad;
  const average = (good - bad) / total; 
  const percentage = good / total * 100 + '%';
  
  const handleGoodFeedback = () => {
      setGood(good +1);
      console.log('Congratulations! You have recieved a good feedback on ' + new Date())
    }
    
  const handleNeutralFeedback = () => {
      setNeutral(neutral +1)
      console.log('Neutral customer´s feedback on ' + new Date())
  }

  const handleBadFeedback = () => {
      setBad(bad +1);
      console.log('Watch out! Bad customer´s feedback on ' + new Date())
  }

  return (
    <>
      <h1>Give us your feedback!</h1>
      <Button handleClick={handleGoodFeedback} text='Good'/>
      <Button handleClick={handleNeutralFeedback} text='Neutral'/>
      <Button handleClick={handleBadFeedback} text='Bad' />
      <h1>Statistics</h1>
      <Statistics 
      good={good} 
      neutral={neutral} 
      bad={bad} 
      total={total}
      average={average} 
      percentage={percentage}
      />
      
    </>
  )
}

export default App;
