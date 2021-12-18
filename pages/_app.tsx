import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { QueryClient, QueryClientProvider } from 'react-query'
import Layout from './layout'

export default function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  )
}