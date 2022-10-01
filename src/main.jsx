import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/index'
import './index.css'
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter as Router } from 'react-router-dom';
// import { persistWithLocalStorage } from 'react-query/persist-localstorage';
// import * as serviceWorkerRegistration from './serviceWorkerRegistration';


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 1000 * 60 * 60 * 24, // 24 hours
    },
  },
});

// persistWithLocalStorage(queryClient);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <Router>
    <App />
    </Router>
    </QueryClientProvider>
  </React.StrictMode>
)
// serviceWorkerRegistration.register();
