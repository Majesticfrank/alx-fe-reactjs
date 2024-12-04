module.exports = {
  testEnvironment: 'jsdom',  // Use 'jsdom' for testing React components in the browser environment
  transform: {
    '^.+\\.jsx?$': 'babel-jest',  // Use Babel to transform JavaScript and JSX files
  },
};