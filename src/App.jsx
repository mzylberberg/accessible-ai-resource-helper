import { useState } from "react";
// Stores category-specific guidance used to create the mock AI response.
const categoryGuidance = {
  accessibility:
    "Focus on clear labels, readable formatting, keyboard access, and asking what accommodations would be most helpful.",
  workplace:
    "Use a respectful tone, name the support being requested, and suggest a practical next step with a supervisor or HR contact.",
  learning:
    "Break the concern into smaller steps, offer study or planning strategies, and encourage the user to ask for clarification when needed.",
  technology:
    "Start with the user's goal, give simple troubleshooting steps, and explain any technical language in plain terms."
};

function buildMockResponse(question, category) {
  const cleanQuestion = question.trim();
  // .trim removes extra spaces from the question. New command I havent used before. Documentating so I can practice and continue to use
  const guidance = categoryGuidance[category];

  return `Thanks for sharing this. A helpful first step is to restate the concern clearly: "${cleanQuestion}".

Based on the selected category, I would suggest this approach: ${guidance}

Possible next message:
"I wanted to ask for support with this because I want to make sure I can fully participate and complete the task successfully. Please let me know what options or next steps are available."`;
}

export default function App() {
  const [question, setQuestion] = useState("");
  const [category, setCategory] = useState("accessibility");
  const [response, setResponse] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (!question.trim()) {
      setError("Please enter a question or concern before pressing 'Generate a Response.' ");
      setResponse("");
      return;
    }

    setError("");
    setResponse(buildMockResponse(question, category));
  }

  function handleReset() {
    setQuestion("");
    setCategory("accessibility");
    setResponse("");
    setError("");
  }

  return (
    <main className="app-shell">
      <section className="intro">
        <p className="eyebrow">React + Vite mini project</p>
        <h1>Accessible AI Resource Helper</h1>
        <p>
          A small frontend demo that turns a user concern into a clear,
          supportive response. The AI response is mocked so the app can stay
          focused on React structure, accessibility, and user experience.
        </p>
      </section>

      <section className="workspace" aria-labelledby="helper-form-heading">
        <form className="helper-form" onSubmit={handleSubmit}>
          <h2 id="helper-form-heading">Generate a Support Response</h2>

          <div className="field-group">
            <label htmlFor="category">Support category</label>
            <select
              id="category"
              value={category}
              onChange={(event) => setCategory(event.target.value)}
            >
              <option value="accessibility">Accessibility</option>
              <option value="workplace">Workplace support</option>
              <option value="learning">Learning support</option>
              <option value="technology">Technology help</option>
            </select>
          </div>

          <div className="field-group">
            <label htmlFor="question">Question or concern</label>
            <textarea
              id="question"
              rows="6"
              value={question}
              onChange={(event) => setQuestion(event.target.value)}
              placeholder="Example: I need help asking for a more accessible way to complete this task."
              aria-describedby={error ? "form-error" : "question-hint"}
            />
            <p id="question-hint" className="hint">
              Share one situation. The helper will create a supportive starting
              point you can revise.
            </p>
          </div>

          {error && (
            <p id="form-error" className="error-message" role="alert">
              {error}
            </p>
          )}

          <div className="button-row">
            <button type="submit">Generate Response</button>
            <button type="button" className="secondary-button" onClick={handleReset}>
              Clear
            </button>
          </div>
        </form>

        <aside className="response-panel" aria-live="polite">
          <h2>Mock AI Response</h2>
          {response ? (
            <pre>{response}</pre>
          ) : (
            <p className="empty-state">
              Your generated response will appear here after you complete the
              form.
            </p>
          )}
        </aside>
      </section>
    </main>
  );
}
// User enters information > React stores it in state > User clicks button > Function processes input > React displays result
