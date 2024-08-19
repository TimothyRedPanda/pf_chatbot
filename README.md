# Joe's Average Joes

Welcome to `Joe's Average Joes` career chat bot! This AI chatbot is designed to help users with career guidance, job options, resume tips, and interview preparation. Start exploring your interests and uncover exciting opportunities today! For the Codefest Hackathon with `Powering Futures` as our stakeholder.

Deployed website - [Click here](https://averagejoe.vercel.app/)

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [File Structure](#file-structure)

## Introduction

This project is a React-based web application that interacts with an AI API to provide career guidance. Users can ask questions and receive responses from the chatbot, which are displayed in a conversational format.

## Features

- **User Input**: Users can type their questions into an input field.
- **AI Responses**: The chatbot provides responses based on the user's input.
- **Memory**: The conversation history is stored and displayed.
- **Loading State**: A loading indicator is shown while the chatbot is processing the user's question.
- **Sanitization**: User input is sanitized to prevent XSS attacks.

## Visit

[Live Chatbot](https://codefest-hackathon.vercel.app/)

## File Structure

- **public/**: Contains static assets and the main HTML file.
- **src/**: Contains the source code for the application.
  - **App.jsx**: Main component of the application.
  - **index.js**: Entry point of the application.
  - **lib/fetch.js**: Contains the function to interact with the AI API.
