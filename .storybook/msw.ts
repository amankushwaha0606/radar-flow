// MSW setup for Storybook
import { setupWorker } from 'msw/browser';
import { handlers } from './handlers';

// Setup MSW worker for Storybook
export const worker = setupWorker(...handlers);
