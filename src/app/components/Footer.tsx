import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full">
    <div className="container pt-4 pb-4 ">
      <Link href="/">
        <h1 className="text-4xl justify-start">
          ak.
        </h1>
      </Link>
    </div>
  </footer>
// ... existing code ...
  )
}

export default Footer