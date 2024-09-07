import { WalletIcon } from 'lucide-react'
import React from 'react'

const Header = () => {
  return (
    <div>
        <header className="flex justify-between items-center p-4 border-b border-[#2c2c2e]  pl-80 pr-80">
        <div className="flex items-center gap-2">
          <WalletIcon className="w-6 h-6 text-[#00ff7f]" />
          <span className="text-xl font-medium">Crypto Wallet</span>
        </div>
        <div>
           
           
        </div>
       
      </header>
    </div>
  )
}

export default Header