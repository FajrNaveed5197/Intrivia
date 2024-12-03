��#   I n t r i v i a 
InTrivia is an interview training platform, this project is designed to assist individuals in improving their interview skills through the use of artificial intelligence. The goal is to create a virtual interview environment that simulates real-life interview scenarios and provides personalized feedback and guidance to help candidates enhance their performance. By utilizing the knowledge of Natural Language processing (semantic similarity and topics modeling), we will implement a real-time interview environment that deals in subjective questioning answering
The major tasks we will be working on are as follows:
•	Semantic Textual Similarity
•	Topic Modeling
•	Web application

          
Project Vision:
Problem Statement:
Currently there is no platform available on the internet which can help people around the globe to prepare themselves for the interview and score their dream job so our mission is to design an interviewing training system which can prepare people before the actual interview and perform at their best.

Business Opportunity:
InTrivia is a subscription-based business model, our free version of the software will allow users to attempt the training session for a limited number of times but users can increase this limit by buying our paid subscription package. Another business side of this project is that it can help companies/organization automate the initial level tests.

Objectives:
Our main Objective is to provide an interview training platform where people can gain knowledge and analyze themselves through mock interviews. At the end of the session a detailed interview session report will be generated which will highlight weak areas of the person and help them improve their presentation skills on the next attempt.

Project Scope:
The project was developed over a course of 8 months and is a web-based application (MERN Stack). Users are asked subjective questions related to a specific topic (C++) and their answers will be marked using a AI model based on semantic analysis and NLP techniques. Topic modeling will be used to fetch most relevant next question for the user and at the end of the session, system will generate a report showing scores along with highlighting improvement areas for the user. User will to listen the question and record the answer though text-to-speech and speech-to-text feature.

Constraints:
We believe that our scope was perfectly balanced with time and cost as everything was be developed by our own selves and 8 months were enough to develop a project of this difficulty level.
2.6.	Stakeholder description and summary:
Stakeholder#1: In our project the stakeholder is an interviewee whose only role would be to sign up on our site and start preparing for the interview. The interviewee can perform only a limited number of test. 
Stakeholder#2: Our second stakeholder is the admin/developer who will has the rights to access through the system and keep a check on site functionality and maintenance checks after a fixed interval of time. The admin can view all users’ details except for their passwords. The questions in the system will also be updated after a fixed time period.

Software Requirement Specifications
List of Features: 
•	Voice-to-text and text-to-voice feature
•	No repetition of questions
•	Scoring of subjective question answers
•	Detailed report generation
•	Highlighting improvement area/topics
•	Certificate generation
•	No copy or pasting during test

Functional Requirements: 
•	The system must allow user to create account by providing required details.
•	The system must allow user to login into their account by entering their email and password.
•	The system must allow user to start the test.
•	The system must allow user to submit each answer.
•	The system must allow user to type or record the answer.
•	The system must allow user to listen the displayed question.
•	The system must allow user to see report at the end of each session b clicking ‘see Report’ button.
•	The system must allow user to download the generated certificate using ‘download’ button.
•	The system must allow user to re-attempt the test if maximum number of tests not achieved.

Quality Attributes: 
•	Maintainability
•	Efficiency
•	Usability
•	Functionality
•	Portability
•	Reliability

Non-Functional Requirements: 
•	The system shall show up an alert saying ‘account created!’ when all required details submitted by the user to create an account.
•	The system shall display ‘Login Page’ automatically once the user cancels the ‘account created!’ alert.
•	The system shall bring user to home page within 3 seconds once login details entered and button clicked.
•	The system shall show up the test screen once ‘start test’ button pressed on the home page.
•	The system shall show a pop up saying ‘answer submitted’ on clicking the submit button.
•	The system shall show up an alert ‘Please write the answer’ if the user tries to submit an empty answer.
•	The system shall load the next question within 3 seconds on pressing ‘next button.
•	The system shall take to the report page on clicking ‘show report’ button at the end of the test.
•	The system shall download the certificate into the user’s system on pressing ‘download’ button.
•	The system shall show an alert if user tries to attempt the test more than allowed attempts.

Architecture Design:
![image](https://github.com/user-attachments/assets/da5b04cc-5439-4b18-b244-d194833beb58)

 User Manual
System Requirements:
Hardware requirements:
A computer or server capable of running Node.js applications.
Adequate storage space for the project files and any associated data.
Software requirements:
Operating system:
The AI interview trainer MERN stack project should be compatible with major operating systems such as Windows, macOS, and Linux.
Web browser:
Users should have a modern web browser installed, such as Google Chrome, Mozilla Firefox, Safari, or Microsoft Edge, to access the AI interview trainer web application.
Dependencies and third-party libraries:

Backend dependencies:
1.	bcryptjs: Used for password hashing and encryption.
2.	cookie-parser: Middleware for parsing cookies in Express.
3.	cors: Enables Cross-Origin Resource Sharing for handling API requests.
4.	dotenv: Loads environment variables from a .env file.
5.	express: Web application framework for Node.js.
6.	jsonwebtoken: Generates and verifies JSON web tokens for authentication.
7.	mongoose: Object Data Modeling (ODM) library for MongoDB.
8.	nodemon: Development dependency for automatic server restarts.
   
Frontend dependencies:
1.	axios: Handles HTTP requests from the frontend to the backend API.
2.	bootstrap: CSS framework for responsive web design.
3.	mdb-react-ui-kit: A UI component library for React applications.
4.	react: JavaScript library for building user interfaces.
5.	react-bootstrap: React implementation of Bootstrap components.
6.	react-dom: Entry point to the React library for rendering components.
7.	react-icons: Provides a set of customizable icons for React applications.
8.	react-redux: Official Redux bindings for React applications.
9.	react-router-bootstrap: Integrates React Router with React Bootstrap.
10.	react-router-dom: Library for declarative routing in React applications.
11.	react-scripts: Configuration and scripts for React applications.
12.	react-speech-recognition: Enables speech recognition capabilities in React applications.

Installation and Setup:
Step-by-step instructions for installing the AI interview trainer MERN stack project:
1.	Clone the project repository:
git clone <repository_url>
2.	Navigate to the project directory:
cd <project_directory>
3.	Install backend dependencies:
npm install
4.	Install frontend dependencies:
cd client
npm install

Configuration options and settings:
Backend configuration:
Open the .env file in the project's root directory.
Set the required environment variables such as:
PORT: The port on which the server will run (default: 5000).
MONGODB_URI: The URI for connecting to the MongoDB database (if applicable).
JWT_SECRET: The secret key for JSON web token generation and verification.
Other configuration variables as needed.

Frontend configuration:
Open the .env file in the client directory.
Set the required environment variables such as:
REACT_APP_API_URL: The URL of the backend API (e.g., http://localhost:5000).
Other configuration variables as needed.

Database setup :
Ensure you have MongoDB installed and running on your system.
Create a new database for the AI interview trainer project.
Update the MONGODB_URI environment variable in the .env file with the appropriate connection string.
Environment variables and API keys:
Backend environment variables:
PORT: The port on which the server will run.
MONGODB_URI: The URI for connecting to the MongoDB database.
JWT_SECRET: The secret key for JSON web token generation and verification.
Any other necessary environment variables for your specific configuration.

Frontend environment variables:
REACT_APP_API_URL: The URL of the backend API.

User Registration and Authentication:
Creating a User Account:
Open the AI interview trainer web application in your web browser.
Click on the "Sign Up" or "Register" button on the homepage.
Fill out the registration form with the required information, such as:
Full name
Email address
Password
Optionally, provide any additional details requested in the registration form.
Click on the "Submit" or "Register" button to create your account.
Upon successful registration, you will receive a confirmation message or email indicating that your account has been created.

Logging In and Out:
Logging In:
Open the AI interview trainer web application in your web browser.
Click on the "Login" or "Sign In" button on the homepage.
Enter your registered email address and password in the provided fields.
Click on the "Login" or "Sign In" button to proceed.
If the entered credentials are valid, you will be logged into your account and redirected to the main dashboard.
Logging Out:
To log out of your account, locate the "Logout" or "Sign Out" option within the application.
Click on the "Logout" or "Sign Out" button.
You will be logged out of your account and redirected to the login page.

User Interface Overview:
After logging into the AI interview trainer MERN stack project, users will be presented with a user-friendly and intuitive interface. Here's an overview of the main dashboard and navigation, as well as the different sections and features available:

Main Dashboard:
Upon logging in, users will be directed to the main dashboard, which serves as the central hub for accessing various features and functionalities.
The dashboard provides a clear and organized view of the available options and sections.

Language Selection:
Upon entering the main dashboard, users will encounter a dropdown menu or language selection page.
Users can select their desired language for the interview from the available options.
This feature ensures that the interview questions and instructions are presented in the user's preferred language.

Interview Screen:
After selecting the desired language, users will be directed to the interview screen.
The interview screen will display the first question and provide options for answering, either through speaking or typing.
Users will have the option to use speech recognition to verbally answer the questions or manually type their responses.
The screen layout will be designed to enhance readability and ease of use.

Question Difficulty Levels:
The interview consists of a total of 15 questions of varying difficulty levels.
The questions will be categorized based on their difficulty, such as easy, medium, and hard.
Users will progress through the questions in sequential order, with the difficulty level increasing gradually.

Navigation and Progress Tracking:
The user interface will include clear navigation elements to help users move between different sections and features.
Users will be able to easily navigate between questions, moving forward or backward as needed.
Progress tracking indicators, such as a progress bar or question counter, will provide users with a sense of their advancement through the interview.

Additional Features:
The user interface may include other relevant features and sections, such as a timer indicating the time remaining for each question or the entire interview.
Users may have the option to pause or resume the interview if needed.
The interface may provide controls for adjusting the audio input settings for speech recognition, such as volume or microphone selection.


About Us:
The AI interview trainer application will include an "About Us" section accessible from the main dashboard or navigation menu.
Clicking on the "About Us" section will provide users with information about the project, its purpose, and the development team.
Users can gain insights into the background and motivation behind the AI interview trainer.

Contact Us:
The "Contact Us" page or section will enable users to get in touch with the support team or provide feedback.
Users will find contact information such as email addresses, phone numbers, or a contact form.
This feature allows users to ask questions, report issues, or offer suggestions regarding the AI interview trainer.

AI Analysis and Feedback:
The AI interview trainer incorporates an advanced analysis and feedback system to provide users with valuable insights and guidance throughout their interview process. Here's an overview of the AI analysis and feedback system, including the evaluation criteria, scoring, and how users can access detailed feedback and suggestions:

Overview of the AI Analysis:
The AI analysis feature utilizes cutting-edge natural language processing (NLP) and machine learning techniques such as flask and base v2 net transformer model to evaluate user responses during the interview.
It analyzes various aspects of the user's answers, such as content, structure, clarity, and relevant skills.
The AI analysis aims to simulate human evaluation and provide constructive feedback to help users improve their interview performance.

Evaluation Criteria and Scoring:
The AI interview trainer employs a set of evaluation criteria to assess user responses accurately.
The criteria may include factors like communication skills, technical knowledge, problem-solving abilities, and overall presentation.
Each criterion is weighted based on its importance and relevance to the specific question and interview context.
The scoring system assigns a numerical or qualitative score to reflect the user's performance for each evaluation criterion.

Accessing Detailed Feedback and Suggestions:
After completing an interview session, users can access detailed feedback and suggestions on their performance.
The system generates a comprehensive evaluation report that highlights strengths, weaknesses, and areas for improvement.
Users can navigate to the interview summary or report section to review their scores and feedback for individual questions.
The feedback may include specific recommendations, tips, or resources to enhance skills or address identified areas of improvement.

Improvement Recommendations:
The AI analysis and feedback system may provide tailored recommendations to help users enhance their interview skills.
These recommendations could include suggested practice techniques, suggested learning resources, or specific areas to focus on for improvement.
Users can leverage these recommendations to refine their interview techniques, expand their knowledge base, and increase their chances of success in future interviews.

Iterative Learning and Progress Tracking:
The AI interview trainer keeps track of user performance and progress over time.
Users can access historical data and compare their scores, feedback, and improvements across multiple interview sessions.
The system allows users to identify trends, track their progress, and observe the effectiveness of their learning strategies.
By leveraging the AI analysis and feedback system, users of the AI interview trainer can receive valuable insights, guidance, and personalized recommendations to enhance their interview skills. The system aims to simulate a realistic interview experience and provide users with actionable feedback to continuously improve their performance.



