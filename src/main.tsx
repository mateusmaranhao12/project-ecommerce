import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import MainRoutes from './routes.tsx'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { GlobalProvider } from './context/global.tsx'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 30
    }
  }
})

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <GlobalProvider>
        <StrictMode>
          <MainRoutes />
        </StrictMode>
      </GlobalProvider>
    </QueryClientProvider>
  </BrowserRouter>
)
