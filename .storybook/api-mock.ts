// API mock for Storybook
import { mockApiResponses } from './mocks/api';

if (typeof window !== 'undefined') {
  const originalFetch = window.fetch;
  
  window.fetch = async (input: RequestInfo | URL, init?: RequestInit) => {
    const url = typeof input === 'string' ? input : input.toString();
    
    // Mock only the endpoints that are actually used by components
    if (url.includes('/contacts')) {
      return new Response(JSON.stringify(mockApiResponses.contacts), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    
    if (url.includes('/topics/summaries')) {
      return new Response(JSON.stringify(mockApiResponses.topics), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    
    if (url.includes('/competitors')) {
      return new Response(JSON.stringify(mockApiResponses.competitors), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    
    // For all other requests, use the original fetch
    return originalFetch(input, init);
  };
}
