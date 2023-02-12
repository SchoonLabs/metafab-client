module.exports = {
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.json',
      useESM: true,
    },
  },
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  extensionsToTreatAsEsm: ['.ts', '.tsx', '.jsx'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  reporters: ['default', 'jest-junit'],
  collectCoverage: true,
  coverageThreshold: {
    global: {
      statements: 0,
      branches: 0,
      functions: 0,
      lines: 0,
    },
  },
  coverageReporters: ['clover', 'json', 'lcov', 'text', 'text-summary'],
  collectCoverageFrom: ['src/**/*.ts', '!src/tests/*.ts', '!src/demo/*.ts', '!src/index.ts', '!src/**/*.d.ts'],
  moduleDirectories: ['node_modules', 'src'],
  setupFilesAfterEnv: ['./testSetup.ts'],
};
