import '../styles/main.scss'

export const metadata = {
  title: 'Hello Home',
  description: 'The next-generation property management platform',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className='h-full'>
      <body className='h-full'>{children}</body>
    </html>
  )
}
