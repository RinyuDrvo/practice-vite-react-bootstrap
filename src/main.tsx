import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App'

if (process.env.NODE_ENV === 'development') {
  ;(async () => {
    const { worker } = await import('@/test/browser')
    worker.start()
  })()
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
