import React from 'react'
import Joke from './components/joke'

const style = {
  margin: 5,
  color: 'red'
}

const App = () => {
  return(
    <div>
      <Joke 
        style={style}
        question= "Setup" 
        punchline= "Payoff" />
      <Joke
        style= {style}
        question= "Setup" 
        punchline= "Payoff" />
      <Joke 
        style= {style}
        question= "Setup" 
        punchline= "Payoff" />
      <Joke 
        style= {style}
        question= "Setup" 
        punchline= "Payoff" />
      <Joke 
        style= {style}
        question= "Setup" 
        punchline= "Payoff" />
    </div>
  )
}

export default App;