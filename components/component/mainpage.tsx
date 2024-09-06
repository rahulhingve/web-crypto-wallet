
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function MainPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#1c1c1e] text-[#e0e0e0] font-sans">
      <header className="flex justify-between items-center p-4 border-b border-[#2c2c2e]  pl-80 pr-80">
        <div className="flex items-center gap-2">
          <WalletIcon className="w-6 h-6 text-[#00ff7f]" />
          <span className="text-xl font-medium">Crypto Wallet</span>
        </div>
        <div>
           <Button>Connect</Button>
        </div>
       
      </header>
      <main className="flex-1 flex flex-col items-center justify-center gap-8 p-8">
        <h1 className="text-3xl font-bold">Create a New Wallet</h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-4xl">
          <div className="bg-gradient-to-r from-[#00ff7f] to-[#8b00ff] rounded-lg p-6 flex flex-col items-center gap-4">
            <div className="flex items-center gap-2">
              <CloudSunIcon className="w-8 h-8" />
              <span className="text-xl font-medium">Solana</span>
            </div>
            <p className="text-center text-sm text-[#e0e0e0]/80">
              Create a Solana wallet to start exploring the Solana blockchain.
            </p>
            <Button>Create Wallet</Button>
          </div>
          <div className="bg-[#2c2c2e] rounded-lg p-6 flex flex-col items-center gap-4">
            <div className="flex items-center gap-2">
              <EclipseIcon className="w-8 h-8 text-[#1a76f2]" />
              <span className="text-xl font-medium">Ethereum</span>
            </div>
            <p className="text-center text-sm text-[#e0e0e0]/80">
              Create an Ethereum wallet to start exploring the Ethereum blockchain.
            </p>
            <Button>Create Wallet</Button>
          </div>
          <div className="bg-gradient-to-r from-[#ff9500] to-[#ff5700] rounded-lg p-6 flex flex-col items-center gap-4">
            <div className="flex items-center gap-2">
            
              <BitcoinIcon className="w-8 h-8" />
              <span className="text-xl font-medium">Bitcoin</span>
            </div>
            <p className="text-center text-sm text-[#e0e0e0]/80">
              Create a Bitcoin wallet to start exploring the Bitcoin blockchain.
            </p>
            <Button>Create Wallet</Button>
          </div>
        </div>
      </main>
      <footer className="flex border-t justify-between border-[#2c2c2e] p-4 pl-80 pr-80 text-center text-sm text-[#e0e0e0]/80">
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

function BitcoinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727" />
    </svg>
  )
}


function CloudSunIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="M20 12h2" />
      <path d="m19.07 4.93-1.41 1.41" />
      <path d="M15.947 12.65a4 4 0 0 0-5.925-4.128" />
      <path d="M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z" />
    </svg>
  )
}


function EclipseIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a7 7 0 1 0 10 10" />
    </svg>
  )
}


function WalletIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
      <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
    </svg>
  )
}
