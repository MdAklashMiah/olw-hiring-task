import React from 'react'
import Container from '../common/Container'
import { serviceCard } from '../../../constant/ServiceCard'

const Services = () => {
  return (
    <div className='pt-14'>
        <Container>
            <h2 className='text-center text-[32px] text-black font-bold mb-3.5'>Our <span className='text-[#ED3C6A]'>Service</span></h2>
            <p className='max-w-[700px] text-sm text-black font-medium mx-auto text-center mb-14'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>

            <div className='flex justify-between flex-wrap space-y-6'>
                {
                    serviceCard.map((item)=>(

                <div className='border border-[#FAC4D2] rounded-[13px] pt-12 px-8 pb-[30px] hover:border-transparent hover:bg-white hover:shadow-[0px_4px_90px_rgba(0,0,0,0.1)] '>
                    
                    <img src={item.icons} alt="icon" />
                    <h3 className='max-w-[215px] text-2xl text-[#1E1E1E] leading-[125%] font-bold mt-8 mb-3.5'>{item.title}</h3>
                    <p className='max-w-[306px] text-sm text-black font-medium mb-9'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    <button className='border border-[#ED3C6A] rounded-[44px] text-[#ED3C6A] px-6 py-2.5'>Read More</button>
                </div>
                    ))
                }
            </div>
        </Container>
    </div>
  )
}

export default Services