/**
 * FUNCTIONS E12: Refactoring
 * =====================================================================================
 * @task
 * Fix the error in the following given function:
 * * Make sure the arguments types are annotated
 * * Make sure the return types of ALL declared functions are annotated
 */

// Refactor the functions in the code beneath...
const logSecondsUpToMax = function (max) {
  let i = 0;
  const timer = setInterval(function () {
    if (i < max) {
      console.log(++i);
    } else {
      clearInterval(timer);
    }
  }, 1000);
};

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-12"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
