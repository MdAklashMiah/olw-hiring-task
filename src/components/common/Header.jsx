import React from 'react'
import Container from './Container'
import Link from 'next/link'

const Header = () => {
  return (
    <header>
        <Container>
            <div className='flex justify-between items-center'>
                <Link href="/">
                <img src="/logo.png" alt="logo" />
                </Link>

                <div className='flex justify-between'>
                    <ul>
                        <li>home</li>
                        <li>about</li>
                        <li>contact</li>
                        <li>faq</li>
                    </ul>
                </div>
                
                <button>learn More...</button>
            </div>
        </Container>
    </header>
  )
}

export default Header