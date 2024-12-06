module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: [
    "**/__tests__/unit/**/*.[jt]s?(x)", // Jest のテストは unit フォルダに限定
  ],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  globals: {
    "ts-jest": {
      isolatedModules: true,
    },
  },
  coverageDirectory: "./coverage",
  collectCoverageFrom: ["src/**/*.{js,ts,jsx,tsx}", "!src/**/*.d.ts"],
};
