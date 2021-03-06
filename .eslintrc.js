module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "airbnb",
        "airbnb/hooks",
        "prettier/react",
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier/@typescript-eslint",
        "plugin:prettier/recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
      }, 
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "import",
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        "linebreak-style": 0,
        "import/no-dynamic-require": 0,
        "import/no-unresolved": 0,
        "import/prefer-default-export": 0,
        "global-require": 0,
        "import/no-extraneous-dependencies": 0,
        "jsx-quotes": ["error", "prefer-single"],
        "react/jsx-props-no-spreading": 0, 
        "react/forbid-prop-types": 0,
        "react/jsx-filename-extension": [2, { "extensions": [".js", ".jsx", ".ts", ".tsx"] }],
        "import/extensions": 0,
        "no-use-before-define": 0, 
        "@typescript-eslint/no-empty-interface": 0,
        "@typescript-eslint/no-explicit-any": 0,
        "@typescript-eslint/no-var-requires": 0,
        "no-shadow": "off",
        "react/prop-types": 0,
        "no-empty-pattern": 0,
        "no-alert": 0,
        "react-hooks/exhaustive-deps": 0
    },
    "settings": { 
        "import/parsers": {
          "@typescript-eslint/parser": [".ts", ".tsx", ".js"] 
        }, 
        "import/resolver": { 
          "typescript": "./tsconfig.json" 
        }
    }
}
