import React from 'react'
import type { Metadata } from 'next'
import Image from 'next/image'
import { staticPath } from '@/lib/$path'

export const metadata: Metadata = {
  title: 'Preflop Record',
  description: 'You can record preflop action.',
}

export default function PreflopRecord({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}
        <div className={`fixed top-0 left-0 w-full h-screen z-[-1]`}>
          <Image src={staticPath.background_jpg} layout={`fill`} objectFit={`cover`} alt="poker-background" />
        </div>
      </body>

    </html>
  )
}