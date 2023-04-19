import './globals.css'

export const metadata = {
  title: "Matt's Playground",
  description: 'A website to test new NextJs features',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      <header>
        <h1>Matt's Playground</h1>
      </header>
        {children}
        </body>
    </html>
  )
}
