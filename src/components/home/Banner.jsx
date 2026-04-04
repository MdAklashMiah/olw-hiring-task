import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Banner = () => {
  return (
    <div className="relative w-full h-[584px]">
  <Image
    src="/heroImage.png"
    alt="Hero"
    fill
    priority
    className="object-cover"
  />

  {/* Overlay */}
  <div className="absolute inset-0  text-center pt-40 pb-24">
    <h1 className="text-black text-5xl font-bold">
      Airbnb Assistants For
    </h1>
    <h3 className='text-[38px] text-black font-medium'> Property Management</h3>
    <p className='max-w-2xl text-black font-medium text-sm mx-auto mt-8 mb-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>

    <button className="flex justify-center items-center mx-auto mb-7 space-x-2.5 px-6 py-[18px] bg-[#ED3C6A] rounded-sm text-sm text-white font-bold">Schedule A Meeting <span><ArrowRight /></span></button>

    <Link className='text-sm text-black font-medium leading-[100%] underline' href="/">See Pricing</Link>
  </div>
</div>
  )
}

export default Banner