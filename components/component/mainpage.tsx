"use client"
import { Button } from "@/components/ui/button"
import { FlipWordsDemo } from "../ui/flip-words-list"
import { useRouter } from "next/navigation"
import Header from "../ui/Header"
import Footer from "../ui/Footer"


export function MainPage() {
  const router = useRouter()



  return (
    <div className="flex flex-col min-h-screen bg-[#000000] text-[#e0e0e0] font-sans">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center gap-8 p-8">
        <FlipWordsDemo />
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
            <Button onClick={() => router.push("/wallet?blockchain=solana")}>Create Wallet</Button>

          </div>
          <div className="bg-[#2c2c2e] rounded-lg p-6 flex flex-col items-center gap-4">
            <div className="flex items-center gap-2">
              <EclipseIcon className="w-8 h-8 text-[#1a76f2]" />
              <span className="text-xl font-medium">Ethereum</span>
            </div>
            <p className="text-center text-sm text-[#e0e0e0]/80">
              Create an Ethereum wallet to start exploring the Ethereum blockchain.
            </p>
            <Button onClick={() => router.push("/wallet?blockchain=ethereum")}>Create Wallet</Button>
          </div>
          <div className="bg-gradient-to-r from-[#ff9500] to-[#ff5700] rounded-lg p-6 flex flex-col items-center gap-4">
            <div className="flex items-center gap-2">

              <BitcoinIcon className="w-8 h-8" />
              <span className="text-xl font-medium">Bitcoin</span>
            </div>
            <p className="text-center text-sm text-[#e0e0e0]/80">
              Create a Bitcoin wallet to start exploring the Bitcoin blockchain.
            </p>
            <Button onClick={() => router.push("/wallet?blockchain=bitcoin")}>Create Wallet</Button>

          </div>
        </div>
      </main>
      <Footer />
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



