How It Works
1. Questions & Answers Stored in an Array
  - Each question is an object with two properties:
  - question: the text shown to the user.
  - answer: the correct answer (stored in lowercase for easy comparison).
    - Example:
    { question: "What is the capital of France?", answer: "paris" }
2. Loop Through Questions
  - A for loop iterates through the array of questions one by one.
  - For each question, the program uses prompt() to ask the user for input.
3. Process User Input
  - The user’s response is normalized with:
    - .toLowerCase() → makes the answer case-insensitive.
    - .trim() → removes extra spaces before/after the input.
  - This ensures " Paris " and "paris" are treated the same.
4. Check Answer
  - The program compares the processed input with the stored correct answer.
  - If correct → shows alert("Correct!").
  - If wrong → shows alert(" Wrong! The correct answer is: ...").
5. Track Score
  - A variable score starts at 0.
  - Each correct answer increases the score by 1.
