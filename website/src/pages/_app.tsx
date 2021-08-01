import type { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';
import './base.scss';
import Header from '../components/Header';


function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}
export default App;
