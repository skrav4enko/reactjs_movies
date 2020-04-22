module.exports = {
  verbose: true,
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(js|jsx)$',
  snapshotSerializers: ["enzyme-to-json/serializer"],
  setupFilesAfterEnv: ['<rootDir>/config/jest/setupTests.js'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/build/', '<rootDir>/cypress/'],
  collectCoverageFrom: ['src/**/*.{js,jsx}'],
  transform: {
    '^.+\\.(js|jsx)$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.(css|scss)$': '<rootDir>/config/jest/cssTransform.js',
    '^(?!.*\\.(js|jsx|css|json)$)': '<rootDir>/config/jest/fileTransform.js',
  },
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$', '^.+\\.module\\.(css|sass|scss)$'],
};
