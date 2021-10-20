import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from './context/context'
import { SpeechProvider } from '@speechly/react-client'

ReactDOM.render(
  <React.StrictMode>
    <SpeechProvider appId="5d490160-8b1a-4606-b82a-72498c1098f7" language="en-US">
      <Provider>
        <App />
      </Provider>
    </SpeechProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
