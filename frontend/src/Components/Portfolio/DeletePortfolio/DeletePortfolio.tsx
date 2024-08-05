import React, { SyntheticEvent } from 'react'
import './DeletePortfolio.css'
interface Props {
    onPortfolioDelete : (e : SyntheticEvent) => void;
    portfolioValue : string;
}

const DeletePortfolio = ({onPortfolioDelete, portfolioValue}: Props) => {
  return (
    <div>
        <form onSubmit={onPortfolioDelete}>
            <input readOnly={true} hidden={true} value={portfolioValue} />
            <button 
            className="custom-button">
              x
            </button>
        </form>
    </div>
  )
}

export default DeletePortfolio;