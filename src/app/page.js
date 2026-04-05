import Header from '@/components/common/Header'
import Banner from '@/components/home/Banner'
import GetStart from '@/components/home/GetStart'
import PricingSection from '@/components/home/Pricing'
import Services from '@/components/home/Services'
import Tools from '@/components/home/Tools'
import TrustedCompany from '@/components/home/TrustedCompany'
import React from 'react'

const page = () => {
  return (
    <div className='bg-'>
      <Header/>
      <Banner/>
      <TrustedCompany/>
      <Services/>
      <PricingSection/>
      <Tools/>
      <GetStart/>
    </div>
  )
}

export default page