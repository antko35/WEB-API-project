import React, { SyntheticEvent } from 'react'
import Card from '../Card/Card'
import { CompanySearch } from '../../company';
import{ v4 as uuidv4} from "uuid"
import './CardList.css'

interface Props  {
  searchResult : CompanySearch[];
  onPortfolioCreate : (e : SyntheticEvent) => void
}

const CardList : React.FC<Props> = ({searchResult, onPortfolioCreate}: Props) : JSX.Element => {
  return (
    <div>
      {searchResult.length > 0 ? (
        searchResult.map((result) =>{
          return <Card id={result.symbol} key={uuidv4()} searchResult={result} onPortfolioCreate={onPortfolioCreate}/>
        })
      ):(
        <p className="custom-text">
        No results!
      </p>
      )}
    </div>
  )
}

export default CardList