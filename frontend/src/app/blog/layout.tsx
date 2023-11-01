import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog Top',
  description: 'Test',
}

export default function BlogTop({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}