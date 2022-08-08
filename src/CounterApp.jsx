import { useState } from 'react';
import PropTypes from 'prop-types';



export const CounterApp = ({value}) => {
  const [ counter, setCounter ] = useState(value);

  const handleAdd = () => {
    setCounter(counter + 1);
  }
  const handleSubtract = () => {
    setCounter(counter - 1);
  }
  const handleReset = () => {
    setCounter(value);
  }

  return (
    <>
      <h2> Contador: { counter } </h2>
      <button onClick={ handleAdd }> +1 </button>
      <button onClick={ handleSubtract }> -1 </button>
      <button onClick={ handleReset }> reset </button>
    </>
    )
}


CounterApp.propTypes = {
  contador: PropTypes.number.isRequired
}


CounterApp.defaultProps = {
  contador: 1
}