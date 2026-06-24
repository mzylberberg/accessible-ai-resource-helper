# Accessible AI Resource Helper

A tiny React/Vite project that demonstrates how an AI-driven support feature could work in an accessibility-centered product.

The app lets a user:

- Choose a support category
- Enter a question or concern
- Generate a mock AI response
- Clear the form and try again

## Why I Built This

I built this project to practice the stack used in a frontend role that works with React, Vite, and mock AI-assisted features. This version does not use a live AI API; instead, it uses mock response logic to simulate the user flow of an AI-powered feature. I focused on keeping the app small, readable, and accessible.

## Accessibility Details

- Form inputs use visible labels
- The error message uses `role="alert"`
- The generated response area uses `aria-live="polite"`
- Buttons and inputs have visible focus states
- Colors were selected for readable contrast

## Tech Stack

- React
- Vite
- JavaScript
- CSS
- HTML

## Project Configuration / Files
- Comments cannot be made on .json files so I am inputting comments here: The `package.json` file lists the project dependencies, including React, React DOM, and Vite. It also defines scripts for running, building, and previewing the app. I also made this dev server accessible outside of just localhost, so Codespaces can expose it through the browser preview with --host 0.0.0.0

## AI Integration Note

This version uses mock response logic instead of a live Claude API call. In a production version, I would connect the form submission to a backend route that securely calls the Anthropic Claude API, then return the model response to the frontend.

## Run Locally
- Within the parent folder -> Press "<>Code"
- Press Run in Codespaces
- In the terminal type below:
```bash
npm install
npm run dev
```

## Interview Talking Point

This project helped me understand how a React/Vite frontend can collect user input, validate it, display helpful feedback, and simulate the flow of an AI-powered response before connecting to a real LLM API.
