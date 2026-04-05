import Footer from '@/components/common/Footer'
import Header from '@/components/common/Header'
import Banner from '@/components/home/Banner'
import FAQ from '@/components/home/FAQ'
import GetInTouch from '@/components/home/GetInTouch'
import GetStart from '@/components/home/GetStart'
import PricingSection from '@/components/home/Pricing'
import Review from '@/components/home/Review'
import Services from '@/components/home/Services'
import Tools from '@/components/home/Tools'
import TrustedCompany from '@/components/home/TrustedCompany'
import WhyChoose from '@/components/home/WhyChoose'
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
      <WhyChoose/>
      <Review/>
      <FAQ/>
      <GetInTouch/>
      <Footer/>
    </div>
  )
}

export default page