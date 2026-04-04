import Header from '@/components/common/Header'
import Banner from '@/components/home/Banner'
import Services from '@/components/home/Services'
import TrustedCompany from '@/components/home/TrustedCompany'
import React from 'react'

const page = () => {
  return (
    <div className='bg-'>
      <Header/>
      <Banner/>
      <TrustedCompany/>
      <Services/>
    </div>
  )
}

export default page