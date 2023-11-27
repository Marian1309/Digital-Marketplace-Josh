import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  dir: './'
});

/** @type {import('jest').Config} */

const config = {
  testMatch: ['**/__tests__/{unit,integration}/*.{test,spec}.{ts,tsx}'],
  testEnvironment: 'jest-environment-jsdom',
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/']
};

export default createJestConfig(config);
