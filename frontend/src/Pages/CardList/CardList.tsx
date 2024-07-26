import React from 'react'
import Card from '../Card/Card'

interface Props  {}

const CardList = (props: Props) => {
  return (
    <div>
        <Card companyName='Apple' ticker='AAPL' price={100} />
        <Card companyName='Microsoft' ticker='MS' price={99}/>
        <Card companyName='Tesla' ticker='TSLA' price={110}/> 
    </div>
  )
}

export default CardList