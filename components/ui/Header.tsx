import { WalletIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div>
      <header className="flex justify-between items-center p-4 border-b border-[#2c2c2e]  lg:pl-80 lg:pr-80 ">
        <div className="flex items-center gap-2">


          <WalletIcon className="w-6 h-6 text-[#00ff7f]" />
          <Link href={"/"}>  <span className="text-xl font-medium">Crypto Wallet</span>   </Link>




        </div>
        <div>


        </div>

      </header>
    </div>
  )
}

export default Header