import React from 'react'
import Joke from './components/joke'

const App = (props) => {
  return(
    <div>
      <Joke question="Setup" punchline="Payoff" />
      <Joke question="Setup" punchline="Payoff" />
      <Joke question="Setup" punchline="Payoff" />
      <Joke question="Setup" punchline="Payoff" />
      <Joke question="Setup" punchline="Payoff" />
    </div>
  )
}

export default App;