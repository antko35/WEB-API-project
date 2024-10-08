import React, { SyntheticEvent } from "react";
import "./Card.css";
import { CompanySearch } from "../../company";
import AddPortfolio from "../Portfolio/AddPortfolio/AddPortfolio";
import './Card.css'
import { Link } from "react-router-dom";

interface Props {
    id : string;
    searchResult : CompanySearch;
    onPortfolioCreate : (e : SyntheticEvent) => void;
};

const Card : React.FC<Props> = ({id, searchResult, onPortfolioCreate}: Props) : JSX.Element => {
  return (
    <div
      className="card"
      key={id}
      id={id}
    >
      <Link to={`/company/${searchResult.symbol}`} className="text">
        {searchResult.name} ({searchResult.symbol})
      </Link>
      <p className="currency">{searchResult.currency}</p>
      <p className="short-name">
        {searchResult.exchangeShortName} - {searchResult.stockExchange}
      </p>
      <AddPortfolio onPortfolioCreate={onPortfolioCreate} symbol={searchResult.symbol} />
    </div>
  );
};

export default Card;