import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: [
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-onboarding',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  typescript: {
    check: false,
  },
  viteFinal: async (config) => {
    // Mock Next.js modules
    config.define = {
      ...config.define,
      'process.env': '{}',
      'process.platform': '"browser"',
      'process.version': '"v16.0.0"',
    };
    
    // Add module resolution for Next.js mocks
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...config.resolve.alias,
      'next/router': require.resolve('../.storybook/mocks/next-router.ts'),
      'next/navigation': require.resolve('../.storybook/mocks/next-router.ts'),
      'next/image': require.resolve('../.storybook/mocks/next-image.ts'),
    };

    // Mock static image imports
    const imageMock = require.resolve('../.storybook/mocks/static-images.ts');
    config.resolve.alias['../../../public/otp-background.png'] = imageMock;
    config.resolve.alias['../../public/otp-background.png'] = imageMock;
    config.resolve.alias['../public/otp-background.png'] = imageMock;
    config.resolve.alias['./otp-background.png'] = imageMock;

    return config;
  },
};

export default config;