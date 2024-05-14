import { TonConnectUIProvider } from '@tonconnect/ui-react';
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// this manifest is used temporarily for development purposes
const manifestUrl = 'https://CamelNotFemale.github.io/ton-dApp/tonconnect-manifest.json';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <TonConnectUIProvider manifestUrl={manifestUrl}>
    <App />
  </TonConnectUIProvider>,
)
