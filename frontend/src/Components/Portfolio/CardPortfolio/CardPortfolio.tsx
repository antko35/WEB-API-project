import React, { SyntheticEvent } from 'react';
import DeletePortfolio from '../DeletePortfolio/DeletePortfolio';
import './CardPortfolio.css'
import { Link } from 'react-router-dom';
interface Props {
    portfolioValue : string;
    onPortfolioDelete : (e : SyntheticEvent) => void;
}

const CardPortfolio = ({portfolioValue, onPortfolioDelete}: Props) => {
  return (
    <div className="card-container">
    <Link to={`/company/${portfolioValue}`} className="port-value">{portfolioValue}</Link>
    <DeletePortfolio
      portfolioValue={portfolioValue}
      onPortfolioDelete={onPortfolioDelete}
    />
    </div>
  )
}

export default CardPortfolio