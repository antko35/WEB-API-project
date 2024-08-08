import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CompanyProfile } from '../../company';
import { GetCompanyProfile } from '../../api';

interface Props {}

const CompanyPage = (props: Props) => {
  let {ticker} = useParams();
  const [company,setCompany] = useState<CompanyProfile>();

  useEffect( () => {
    const getProfileInit = async () => {
      const result = await GetCompanyProfile(ticker!);
      setCompany(result?.data[0]);
    }
    getProfileInit();
  }, []); 
  return (
    <>
    {company ? (
      <div>{company.companyName}</div>
     ) : (
      <div>
        Company not found
      </div>
     )}
    </>
  )
}

export default CompanyPage