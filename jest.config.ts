/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
    // Automatically clear mock calls, instances, contexts and results before every test
    clearMocks: true,

    // Indicates whether the coverage information should be collected while executing the test
    collectCoverage: true,

    // The directory where Jest should output its coverage files
    coverageDirectory: 'coverage',

    // An array of file extensions your modules use
    moduleFileExtensions: ['js', 'ts', 'json', 'node'],

    // A list of paths to directories that Jest should use to search for files in
    roots: ['<rootDir>/src'],

    // A list of paths to modules that run some code to configure or set up the testing framework before each test
    setupFilesAfterEnv: ['<rootDir>/src/test-utils/setup.ts'],

    // The test environment that will be used for testing
    testEnvironment: 'node',

    // The regexp pattern or array of patterns that Jest uses to detect test files
    testRegex: ['(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$'],

    // A map from regular expressions to paths to transformers
    transform: { '^.+\\.tsx?$': 'ts-jest' },

    // Indicates whether each individual test should be reported during the run
    verbose: true,
};
