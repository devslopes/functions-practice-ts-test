## GETTING STARTED

- Clone this repository.
- Create a new repository in your Github account. Set it to be a public repo. Copy the new repo SSH path.
- Open the cloned repo project in your favorite IDE. Start a terminal session.
- Update/change the remote origin path with to the new SSH path **OR** add a new path (f.i "solved" or "destination"). [Github's git remote actions docs](https://docs.github.com/en/get-started/getting-started-with-git/managing-remote-repositories).
- Push the main/master branch to the new repository.
- Run `npm i` to install dependencies and packages.
- Start solving the exercises, following the "HOW IT WORKS" section.

## BEFORE YOU START

Some exercises in this assignment have a reference to the TypeScript documentation page/pages in the top commented out section. Make sure to read the docs before you start solving the exercise tasks.

## HOW IT WORKS

- The repo has the "exercises" folder with 15 exercise files (e1.js, e2.js, ... etc). Each file includes the exercise description, tasks descriptions, and a placeholder for your code.
- Open e1.js file and start writing function code in the "Your code goes here..." placeholder to achieve the goals described.
- Most of the functions, type or interfaces are asked to be exported or imported.
  - to export an entity use the `export` keyword before the entity declaration.
  - to import an entity use the `import` keyword before the entity declaration.
  - Examples:

```JS
// Exporting a function, a type or an interface:
export function someFunc(args) {
  return args;
};
export type someType = { num1: number };
export interface someInterface = { name: string };

// Importing an exported entity by entity names from a source file
import { someFunc, someType, someInterface } from './sourceFile';
```

- **!!! We don't have any restricted methods for this assignment, unless any restriction is set for the function individually in the task description. Please, pay attention to every exercise task description.**
- Once you are done, run the test command `npm run test-1` in the command line, where "1" is the current exercise number. This will start the test environment and show the passed and failed tests for the current code you have written.
- If the test results have all tests passed (no red comments), consider it to be finished successfully, then switch to the next exercise file.
- If any of the tests fails, refactor the code and run the test command after you've fixed the function.
- Please, don't switch to the next exercise file until the current one is finished successfully.
- Please, don't switch to the next part file until the current part ALL exercises are solved successfully.
- The goal is to write proper code for every exercise file and pass ALL tests successfully.
- Once you have finished ALL files you can run ALL tests to test yourself with `npm run test-all`

### CAUTION

Please, do **NOT** change or update:

- Functions' arguments or their names.
- Lines of code that are asked NOT to change or delete.
- Files in the "data" folder.
- Files in the "test" folder.

You can only write your code in the "Your code goes here..." placeholder in each exercise file.

Changing the files listed above may cause tests failure.
You can add/commit any repo changes any time you want, but if you haven't added, committed any changes you can always restore those file's initial state with `git restore <fileName>` command.

### ACCEPTANCE CRITERIA

- ALL the requirements and tasks description must be met.
- There must be 0 TypeScript notifications
- There must be 0 items of type ANY. All functions arguments types MUST be annotated.

### HOW TO SUBMIT

- Make sure all the tests pass with `npm run test-all`.
- If not, refactor your code to have all tests passed. You can run `npm run test-all` again, once you think you have fixed it to see the results.
- Commit and push the changes to your repository (the one you have created on step 2 of GETTING STARTED).
- Submit the txt file with a repo link on the exercise page in Devslopes course.
