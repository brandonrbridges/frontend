import { SessionProvider } from 'next-auth/react'
import { QueryClient, QueryClientProvider } from 'react-query'

const qc = new QueryClient()

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session} refetchInterval={5 * 60}>
      <QueryClientProvider client={qc}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </SessionProvider>
  )
}
