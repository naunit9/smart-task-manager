# Smart Task Manager

## Project Overview

Smart Task Manager is a full-stack task management application built using HTML, CSS, JavaScript, Node.js, Express.js, and MongoDB.

The application allows users to create, edit, update, complete, and delete tasks. It also includes AI-inspired task recommendations based on user activity and task categories.

## Features

* User Signup and Login
* Task Creation
* Edit Task
* Delete Task
* Mark Task as Complete
* MongoDB Database Integration
* AI Task Suggestions
* Smart Recommendation API
* Responsive User Interface

## Technology Stack

* HTML
* CSS
* JavaScript
* Node.js
* Express.js
* MongoDB

## API Endpoints

### Task APIs

GET /api/tasks

POST /api/tasks/add

PUT /api/tasks/:id

DELETE /api/tasks/:id

PATCH /api/tasks/:id/complete

### AI APIs

GET /api/tasks/recommendations/:userId

## Smart Recommendation Logic

The recommendation system analyzes completed tasks, identifies the user's most frequently completed task category, and recommends pending tasks from the same category.

## Future Improvements

* Advanced Machine Learning Recommendations
* Task Priority Prediction
* Analytics Dashboard
* User Profiles
