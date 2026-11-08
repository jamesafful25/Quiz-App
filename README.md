# Automobile Quiz App 

An interactive, web-based automobile knowledge quiz application built with **HTML5, CSS3, and JavaScript (ES6)**. The application integrates the **Open Trivia Database (OpenTDB) API** to retrieve multiple-choice questions, allowing users to test their knowledge of automobile-related topics.

The application dynamically loads quiz questions, shuffles answer options, provides immediate visual feedback, tracks user scores, and displays the final results at the end of each quiz.

Designed with a clean, responsive, and mobile-friendly interface, the application provides a simple and engaging quiz experience without requiring a backend server or additional dependencies.

## 1. Project Overview

The Automobile Quiz App was developed to demonstrate how JavaScript can be used to build interactive web applications that consume external APIs and dynamically update the user interface.

The application retrieves automobile-related questions from OpenTDB and presents them as a multiple-choice quiz.

Users select answers, receive immediate feedback, progress through the questions, and view their final scores upon completion.

The project demonstrates practical frontend development concepts, including:

- REST API integration.
- Asynchronous JavaScript and Fetch API.
- JSON response processing.
- Dynamic DOM manipulation.
- Event handling.
- Array manipulation and answer shuffling.
- Conditional logic and score calculation.
- Interactive user interface development.
- Responsive web design.

## 2. Key Features

### Dynamic Quiz Questions

- Retrieves 15 multiple-choice questions from the Open Trivia Database API.
- Focuses on automobile-related topics.
- Dynamically displays questions and answer options.

### Randomized Answer Options

Answer choices are automatically shuffled to make the quiz experience less predictable and prevent users from relying on fixed answer positions.

### Instant Answer Feedback

The application immediately indicates whether a selected answer is correct or incorrect.

- Correct answers are highlighted in green.
- Incorrect answers are highlighted in red.

### Score Tracking

The application tracks the user's performance throughout the quiz and calculates the final score based on the number of correctly answered questions.

### Quiz Navigation

Users can progress through the quiz using the Next button after selecting an answer.

### Final Score Display

At the end of the quiz, the application displays the user's final score.

### Quiz Restart

Users can restart the quiz and attempt another round.

### Responsive User Interface

The application provides a clean and mobile-friendly layout designed to work across different screen sizes.

## 3. Technology Stack

| Technology | Purpose |
|---|---|
| HTML5 | Application structure and content |
| CSS3 | Styling, layouts, and responsive design |
| JavaScript (ES6) | Quiz logic, interactions, and application functionality |
| Fetch API | Retrieving quiz questions from the external API |
| Open Trivia Database (OpenTDB) | Providing multiple-choice quiz questions |
| JSON | API response data exchange and processing |

## 4. Application Architecture

The application follows a lightweight client-side architecture. It does not require a separate backend server or database.

### Frontend

- **HTML5:** Defines the structure of the quiz interface.
- **CSS3:** Provides visual styling, answer feedback, and responsive layouts.
- **JavaScript:** Handles quiz logic, API communication, answer validation, score calculation, and navigation.

### External API Integration

The application uses the Open Trivia Database API to retrieve multiple-choice questions.

The Fetch API sends HTTP requests to the external service, receives the response, and processes the returned JSON data for presentation.

### Quiz Logic

JavaScript manages the quiz workflow, including:

- Loading questions.
- Shuffling answer options.
- Capturing user selections.
- Checking selected answers against the correct answers.
- Displaying feedback.
- Updating the score.
- Navigating between questions.
- Displaying final results.
- Restarting the quiz.

## 5. Project Structure

```text
Quiz-App/
│
├── index.html       # Quiz application structure
├── style.css        # Styling and responsive layout
├── app.js           # API integration and quiz logic
└── README.md        # Project documentation
```

## 6. Getting Started

Follow these instructions to run the application locally.

### Prerequisites

You will need:

- A modern web browser.
- A code editor such as Visual Studio Code.
- An active internet connection to retrieve questions from OpenTDB.

No API key or additional package installation is required for the Open Trivia Database.

### Step 1: Clone the Repository

```bash
git clone https://github.com/jamesafful25/Quiz-App.git
```

### Step 2: Navigate to the Project Directory

```bash
cd Quiz-App
```

### Step 3: Run the Application

Open `index.html` in your preferred web browser.

Alternatively, use the Visual Studio Code Live Server extension to launch the application locally.

No additional dependencies or build tools are required.

## 7. How to Use the Application

1. Open the application in your browser.
2. The application retrieves 15 automobile-related multiple-choice questions from OpenTDB.
3. Read the displayed question and available answer options.
4. Select your preferred answer.
5. The application immediately highlights the correct answer in green and an incorrect selection in red.
6. Click the **Next** button to proceed to the next question.
7. Continue until all questions have been answered.
8. View your final quiz score.
9. Restart the quiz to try again.

## 8. Application Workflow

The application follows this general process:

1. **Initialization:** The application loads in the browser.
2. **API Request:** JavaScript sends a request to the Open Trivia Database API.
3. **Data Retrieval:** The API returns multiple-choice questions in JSON format.
4. **Data Processing:** JavaScript processes the response and prepares the questions and answer options.
5. **Answer Randomization:** Available answer options are shuffled.
6. **User Interaction:** The user selects an answer.
7. **Answer Validation:** JavaScript checks the selected answer against the correct answer.
8. **Feedback:** The interface highlights the answer selection.
9. **Score Calculation:** The application updates the user's score.
10. **Results:** The final score is displayed when the quiz is completed.

## 9. Skills Demonstrated

This project demonstrates practical experience in:

- Frontend Web Development.
- HTML5 and CSS3.
- JavaScript (ES6).
- REST API Integration.
- Fetch API and Asynchronous Programming.
- JSON Data Processing.
- DOM Manipulation.
- Event-Driven Programming.
- Array Manipulation and Randomization.
- Conditional Logic.
- Application State Management.
- Interactive User Interface Development.
- Responsive Web Design.

## 10. Potential Future Enhancements

Possible improvements to the application include:

- Multiple quiz categories.
- Difficulty-level selection.
- Countdown timer for each question.
- User performance history.
- High-score leaderboard.
- Question difficulty and category filters.
- Improved loading indicators and API error handling.
- More detailed performance summaries.

## 11. Author

**James Afful**

Full-Stack Developer | DevOps & Cloud Engineer | AI Automation Engineer | Data Scientist & Analytics | Economist & Financial Analyst

### Professional Links

- **GitHub:** [github.com/jamesafful25](https://github.com/jamesafful25)
- **Portfolio:** [jamesafful25.github.io/james-afful-portfolio](https://jamesafful25.github.io/james-afful-portfolio/)
- **Email:** [james.afful47@gmail.com](mailto:james.afful47@gmail.com)

---

*Designed and developed by James Afful.*
