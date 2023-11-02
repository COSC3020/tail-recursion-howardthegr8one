[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=12698385&assignment_repo_type=AssignmentRepo)
# Tail Recursion

In the lectures, we've seen code for a recursive implementation for computing
the Fibonacci numbers. Make this implementation tail-recursive. I have not
provided a template; depending on how you choose to implement the function, it
will have a different signature. I have also not provided any test code, but you
can base yours on test code from other exercises.

Hint: It may help to have a look at the iterative dynamic programming
implementation. What changes between iterations of the loop?

## Runtime Analysis

Is the asymptotic complexity of tail-recursive Fibonacci different from the
non-tail-recursive version? Why, or why not? Add your answer, including your
reasoning, to this markdown file.

## Analysis for my implementation
The non-tail-recursive version has a complexity of $O(2^n)$ because for every
function call that is not the base case it will make two subsequent calls
and each of those calls will themselves make two calls until a base case
is reached. 

The tail-recursive version has a complexity of $n$ since for every call that
is not the base case it will only call itself once, thus it follows a linear
pattern of calls, rather than an exponentially branching pattern that the 
non-tail-recursive version follows. In conclusion the two versions have 
different complexities and the tail-recursive version is more efficient with
$O(n)$ compared to the iterative $O(2^n)$
