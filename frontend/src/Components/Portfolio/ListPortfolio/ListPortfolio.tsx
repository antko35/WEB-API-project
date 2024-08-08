import React, { SyntheticEvent } from 'react'
import CardPortfolio from '../CardPortfolio/CardPortfolio'
import './ListPortfolio.css'

interface Props {
    portfolioValues : string[]
    onPortfolioDelete : (e : SyntheticEvent) => void;
}

const ListPortfolio = ({portfolioValues, onPortfolioDelete}: Props) => {
  return (
    <section id="portfolio">
  <h2 className="portfolio-title">
    My Portfolio
  </h2>
  <div className="portfolio-container">
    {portfolioValues.length > 0 ? (
      portfolioValues.map((portfolioValue) => (
        <CardPortfolio
          key={portfolioValue}  // Assuming each portfolioValue has a unique id
          portfolioValue={portfolioValue}
          onPortfolioDelete={onPortfolioDelete}
        />
      ))
    ) : (
      <h3 className="portfolio-empty-message">
        Your portfolio is empty.
      </h3>
    )}
  </div>
</section>

  )
}

export default ListPortfolio