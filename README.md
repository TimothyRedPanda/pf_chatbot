# Joe's Average Joes

Based on the work completed by myself and my awesome hackathon team -

GitHub of hackathon version - [Click here](https://github.com/AparnaAbbina/averagejoe)

Deployed version of my NextJS version connected to my own Open AI api key - [Click here](https://codefest-hackathon.vercel.app/)

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
