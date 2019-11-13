import React from 'react';

const Joke = (props) => {
  console.log(props)
  return (
    <div>
    <p>{props.question}</p>
    <p>{props.punchline}</p>
    </div>
  )
}

export default Joke;