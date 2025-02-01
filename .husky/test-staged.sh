# Get changed files that match .js, .ts, or .tsx
CHANGED_FILES=$(git diff --name-only --cached --relative | grep -E '\.(js|ts|tsx)$')

if [ -n "$CHANGED_FILES" ]; then
  # Find related test files
  TEST_FILES=$(echo "$CHANGED_FILES" | xargs -r npx jest --findRelatedTests --listTests)

  if [ -n "$TEST_FILES" ]; then
    echo "Running tests for:\n$TEST_FILES"
    npx jest --bail --findRelatedTests $TEST_FILES
  else
    echo "No matching test files found, skipping tests."
  fi
else
  echo "No changed files found, skipping tests."
fi
