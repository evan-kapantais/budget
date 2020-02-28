import React from 'react'
import styled from 'styled-components'

const StyledCard = styled.div `
  background: #fff;
  box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  width: 600px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    margin-bottom: 2rem;
  }

  form {
    text-align: center;
  }

  input {
    display: block;
    margin-bottom: 1rem;
    border: none;
    border-bottom: 1px solid #333;
    width: 250px;
    padding: 0.5rem;
    text-align: center;
    font-size: 2rem;
    transition: width 300ms ease, border-color 300ms 200ms ease ;

    &:focus {
      outline: none;
      width: 350px;
      border-color: lightblue;
    }

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      -moz-appearance:textfield;
      margin: 0;
    }
  }

  button {
    font-size: 1rem;
    padding: 0.7rem 1rem;
    background: #333;
    color: #fff;
    border: none;

    &:hover {
      cursor: pointer;
    }
  }
`

const IntroCard = (props) => {
  return (
    <StyledCard>
      <h1>What's this month's budget?</h1>
      <form onSubmit={(props.submitBudget)}>
        <input type='number' step='0.001' onChange={props.onChange}/>
        <button type='submit'>That's My Budget</button>
      </form>
    </StyledCard>
  );
}

export default IntroCard;