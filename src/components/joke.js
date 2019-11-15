import React from 'react'

const Joke = (props) =>{
  return (
    <div>
      {props.question && 
      <>
      <h3>Question: {props.question}</h3>
      <h3>Answer: {props.punchline} </h3>
      </>
      }
      {!props.question &&
      <>
      <h3>Answer :{props.punchline} </h3>
      </>
      }
      
    </div>
  )
}

export default Joke;