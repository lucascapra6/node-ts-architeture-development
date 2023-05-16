
export default {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testPathIgnorePatterns: [
        "/node_modules/",
        "/dist/"
    ],
    roots: [
        //"<rootDir>/src"
        "<rootDir>"
    ],
    testMatch: [
        "**/__tests__/**/*.+(ts|tsx|js)",
        "**/?(*.)+(spec|test).+(ts|tsx|js)"
    ],
    transform: {
        "^.+\\.(ts|tsx)$": "ts-jest"
    },
    moduleNameMapper: {
        '^(\\.{1,2}/.*)\\.js$': "$1",
    }
};
