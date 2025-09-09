import type { Preview } from '@storybook/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../src/theme/muiTheme';
import React from 'react';
import './api-mock';

// Mock process global for browser environment
if (typeof window !== 'undefined') {
  (window as any).process = {
    env: {},
    platform: 'browser',
    version: 'v16.0.0',
  };
}

// Create a new QueryClient instance for Storybook
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

const preview: Preview = {
  decorators: [
    (Story) => {
      return React.createElement(QueryClientProvider, { client: queryClient },
        React.createElement(ThemeProvider, { theme: theme },
          React.createElement(React.Fragment, null,
            React.createElement(CssBaseline),
            React.createElement(Story)
          )
        )
      );
    },
  ],
};

export default preview;
