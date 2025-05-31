import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router";
import './index.css'
import App from './App.jsx'
import { RecoilRoot } from 'recoil'
import { ClerkProvider } from '@clerk/clerk-react'
import { Suspense } from 'react';
import Loading from './components/common/Loading.jsx';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}

createRoot(document.getElementById('root')).render(
  <Suspense fallback={<Loading />}>
    <BrowserRouter>
      <RecoilRoot>
        <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl='/' >
          <App />
        </ClerkProvider>
      </RecoilRoot>
    </BrowserRouter>
  </Suspense>
)
