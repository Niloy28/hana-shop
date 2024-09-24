const esmModules = [
  "@t3-oss",
  "jose",
  "uncrypto",
  "react-markdown",
  "devlop",
  "hast-util-to-jsx-runtime",
  "comma-separated-tokens",
  "estree-util-is-identifier-name",
  "hast-util-whitespace",
  "property-information",
  "space-separated-tokens",
  "unist-util-position",
  "vfile-message",
  "unist-util-stringify-position",
  "html-url-attributes",
  "remark-parse",
  "mdast-util-from-markdown",
  "mdast-util-to-string",
  "micromark",
];

import type { Config } from "jest";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
const customJestConfig: Config = {
  coverageProvider: "v8",
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
const asyncConfig = createJestConfig(customJestConfig);

module.exports = async () => {
  const config = await asyncConfig();
  config.transformIgnorePatterns = [
    `node_modules/(?!(?:.pnpm/)?(${esmModules.join("|")}))`,
  ];
  return config;
};
