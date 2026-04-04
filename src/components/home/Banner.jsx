import React from 'react'

const Banner = () => {
  return (
    <div className="relative w-full h-[500px]">
  <Image
    src="/hero.jpg"
    alt="Hero"
    fill
    priority
    className="object-cover"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
    <h1 className="text-white text-4xl font-bold">
      Your Hero Text
    </h1>
  </div>
</div>
  )
}

export default Banner