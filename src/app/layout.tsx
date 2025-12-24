import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Anthana Group + Cloud Driver | Alianza Databricks',
  description: 'Propuesta estratégica para transformación de datos con Databricks',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="antialiased">{children}</body>
    </html>
  )
}


