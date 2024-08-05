import React, { SyntheticEvent } from 'react';
import DeletePortfolio from '../DeletePortfolio/DeletePortfolio';
import './CardPortfolio.css'
interface Props {
    portfolioValue : string;
    onPortfolioDelete : (e : SyntheticEvent) => void;
}

const CardPortfolio = ({portfolioValue, onPortfolioDelete}: Props) => {
  return (
    <div className="card-container">
    <p className="port-value">{portfolioValue}</p>
    <DeletePortfolio
      portfolioValue={portfolioValue}
      onPortfolioDelete={onPortfolioDelete}
    />
    </div>
  )
}

export default CardPortfolio