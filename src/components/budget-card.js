import React from 'react'
import styled from 'styled-components'

const StyledBudgetCard = styled.div `
  background: #fff;
  box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  width: 360px;
  padding: 1.5rem 1rem;
  
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &:first-child {margin-bottom: 0.5rem;}
  }

  h1 {
    line-height: 1;
  }
  
`

const BudgetCard = ({ budget }) => {
  return (
    <StyledBudgetCard>
      <div>
        <h3>Monthly Budget</h3>
        <h1>{budget}€</h1>
      </div>
      <div>
        <p>Expenses</p>
        <p style={{color: `red`}}>-234.43€</p>
      </div>
    </StyledBudgetCard>
  );
}

export default BudgetCard;