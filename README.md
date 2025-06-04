# Quadratic Equation Solver

This application solves quadratic equations of the form:

```ax² + bx + c = 0```

It supports both *interactive* and *file-based (non-interactive)* modes, and handles real and complex roots with appropriate messages.

## Variant

Student ID mod 4 = 2 → Implement using:

 -First implementation: *built-in array-based list*

 -Refactor to: singly linked circular list

## Getting Started

### Requirements

 - Node.js (v18+)

 - npm (Node Package Manager)

### Installation

```npm install```

### Run Interactive Mode

```node calculator.js```

### Run Tests

```npm test```

## File Format for Non-Interactive Mode

File should contain 3 numbers (a, b, c) separated by space or newline. Example:
```
2
-4
2
```
This represents the equation ```2x² - 4x + 2 = 0```

## GitHub Actions & CI/CD

This project uses GitHub Actions to run Jest tests on every push to ```main```.

### Failed Test Commit:

```903e1d8``` — test was broken intentionally to demonstrate CI failure.

### Fixed Commit:

```c496f35``` — test restored and all tests pass.

## Unit Testing

 - 8 unit tests implemented with Jest

 - Covered functionality: append, insert, delete, reverse, find, clone, get, clear

 - CI passes when all tests succeed

## Conclusion

Unit testing helped catch regression after a minor intentional break. CI clearly demonstrated failure and success, making the development process transparent and reliable.

 "Testing saves time, especially when refactoring."

### Commit with Failed Tests:
[73f4583] (https://github.com/dinaazavrrr/mtrpz2/commit/73f45836c72e850a65fecedf9b6aac9822465769) — intentionally broke one test to demonstrate CI failure.