import { Provider } from '@/components/ui/provider';
import Layout from '@/comps/Layout';

export default function App({ Component, pageProps }) {
  return (
    <Provider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}