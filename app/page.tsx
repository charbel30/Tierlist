import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter  = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <main className="">

      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <Image src="/icons/logo.svg" alt="website logo" width={100} height={100} />
        <h1 className="text-6xl font-bold mt-10">
          Welcome to{' '}
          <a className="text-blue-600" href="/">
            Rankifiy
          </a>
        </h1>
        <p className="mt-3 text-2xl">
          Get started by editing{' '}
          <code className="p-3 font-mono text-lg bg-gray-100 rounded-md">
            pages/index.js
          </code>
        </p>
          
      </div>
    </main>

    </>
  )
}
