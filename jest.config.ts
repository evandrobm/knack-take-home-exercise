import type { Config } from "jest"

const config: Config = {
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.ts*"],
  coverageThreshold: {
    global: {
      lines: 90,
      statements: 90,
    },
  },
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  verbose: true,
  preset: "ts-jest",
}

export default config
