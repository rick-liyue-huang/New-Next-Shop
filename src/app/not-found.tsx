// app/products/not-found.js

import Link from 'next/link'
import Image from 'next/image'

export default function NotFound() {
  return (
    <div className="text-center w-full px-2 flex flex-col items-center justify-center mt-3">
      <h1 className="text-4xl font-bold mb-4">Not Found</h1>
      <p className="mb-4">Sorry, we couldn&apos;t find the page you were looking for.</p>
      <Link href="/home" className="text-blue-500 hover:underline">
        Back to home
      </Link>
      <Image src='/images/not-found.png'
        className='m-0 rounded-xl' width={400} height={400} sizes='400px'
        alt='Not Found' priority={true} title='Not Found' />
    </div>
  )
}