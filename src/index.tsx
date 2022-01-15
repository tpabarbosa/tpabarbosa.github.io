import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { ThemedApp } from './Theme';
import { TranslatedApp } from './Translation';

ReactDOM.render(
  <React.StrictMode>
    <ThemedApp>
      <TranslatedApp>
        <App />
      </TranslatedApp>
    </ThemedApp>
  </React.StrictMode>,
  document.getElementById('root')
);

