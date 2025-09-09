// Mock for Next.js router
export const mockRouter = {
  push: () => Promise.resolve(true),
  replace: () => Promise.resolve(true),
  prefetch: () => Promise.resolve(),
  back: () => {},
  forward: () => {},
  refresh: () => {},
  pathname: '/',
  route: '/',
  asPath: '/',
  query: {},
  isReady: true,
  isPreview: false,
  isFallback: false,
  basePath: '',
  locale: 'en',
  locales: ['en'],
  defaultLocale: 'en',
  domainLocales: [],
  isLocaleDomain: false,
  events: {
    on: () => {},
    off: () => {},
    emit: () => {},
  },
};

// Mock search params with a default email for testing
const mockSearchParams = new URLSearchParams();
mockSearchParams.set('email', 'test@example.com');

// Mock the useRouter hook
export const useRouter = () => mockRouter;

// Mock the usePathname hook
export const usePathname = () => '/';

// Mock the useSearchParams hook
export const useSearchParams = () => mockSearchParams;
