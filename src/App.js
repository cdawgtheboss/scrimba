import React from 'react'
import Joke from './components/joke'

const spanStyle = {
  margin: 5,
  color: 'red'
}

const App = () => {
  return(
    <div>
      <Joke 
        style={spanStyle}
        question= "Setup" 
        punchline= "Payoff" />
      <Joke
        style= {spanStyle}
        question= "Setup" 
        punchline= "Payoff" />
      <Joke 
        style= {spanStyle}
        question= "Setup" 
        punchline= "Payoff" />
      <Joke 
        style= {spanStyle}
        question= "Setup" 
        punchline= "Payoff" />
      <Joke 
        style= {spanStyle}
        question= "Setup" 
        punchline= "Payoff" />
    </div>
  )
}

export default App;