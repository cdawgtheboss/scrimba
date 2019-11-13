import React from 'react';

const Joke = (props) => {
  return (
    <div>
    <span>{props.question}</span>
    <span>{props.punchline}</span>
    </div>
  )
}

export default Joke;