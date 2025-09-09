// MSW worker setup for Storybook
import { setupWorker } from 'msw/browser';
import { handlers } from './handlers';

// Create and start the worker
export const worker = setupWorker(...handlers);

// Start the worker when this module is imported
if (typeof window !== 'undefined') {
  worker.start({
    onUnhandledRequest: 'bypass',
  });
}
