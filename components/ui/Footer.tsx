import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="flex border-t justify-between border-[#2c2c2e]  p-4 lg:pl-80 lg:pr-80 text-center text-sm text-[#e0e0e0]/80  " >
        <div className="flex  gap-4">made with ❤️ by Rahul</div>
        <div className="flex  gap-4">
          <Link href="#" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" prefetch={false}>
            Privacy Policy
          </Link>
          <Link href="#" prefetch={false}>
            Contact Us
          </Link>
        </div>
      </footer>
    </div>
  )
}

export default Footer