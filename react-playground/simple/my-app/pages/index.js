import Image from 'next/image'
import { Inter } from 'next/font/google'
import TestComponent from "@/components/test-component"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {


  return (
    <div>
      <TestComponent count={0} count2={100}/>
      
    </div>
  )
}
