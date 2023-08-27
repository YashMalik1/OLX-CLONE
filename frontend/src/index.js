import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import { msalConfig } from "./configs/authConfigs";
import { UserIdContextProvider } from './contexts/UserIdContext';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { QueryNameContextProvider } from './contexts/QueryNameContext';
import { QueryHostelContextProvider } from './contexts/QueryHostelContext';

const queryClient = new QueryClient();
const msalInstance = new PublicClientApplication(msalConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <QueryNameContextProvider>
        <QueryHostelContextProvider>
          <UserIdContextProvider>
            <MsalProvider instance={msalInstance}>
              <App />
            </MsalProvider>
          </UserIdContextProvider>
        </QueryHostelContextProvider>
      </QueryNameContextProvider>
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
    </QueryClientProvider>
  </BrowserRouter>
);

