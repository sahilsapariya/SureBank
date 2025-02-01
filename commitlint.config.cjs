// commitlint.config.js
module.exports = {
  rules: {
    "type-enum": [0],
    "subject-case": [2, "always", "sentence-case"],
    "subject-full-stop": [0, "never"],
    "header-max-length": [2, "always", 72],
    "subject-min-length": [2, "always", 7],
  },
  plugins: [
    {
      rules: {
        "ml-prefix": (parsed) => {
          const { subject } = parsed;
          if (!subject.startsWith("ML-")) {
            return [false, "Subject must start with 'ML-'"];
          }
          return [true];
        },
      },
    },
  ],
};
