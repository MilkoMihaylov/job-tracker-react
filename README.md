## Job Tracker (React)

A simple but well-structured React application for tracking job applications with status management, filtering, and persistent storage.

---

## Live Features

- Add new job applications
- Delete jobs
- Update job status (Applied / Interview / Rejected)
- Filter jobs by status
- Persistent data using LocalStorage
- Fully reactive UI using React state management

---

## Tech Stack

- React (Hooks: useState, useEffect)
- JavaScript (ES6+)
- LocalStorage API
- CSS (basic styling)

---

## Architecture Overview

- Single source of truth: `jobs` state
- Immutable updates using `map`, `filter`, spread operator
- Derived state: `filteredJobs`
- Side effects handled via `useEffect`
- Persistent storage via LocalStorage sync

---

## Key Concepts Practiced

- Controlled components (inputs)
- State lifting & updates
- Array transformations (map/filter)
- Component-based thinking
- Persistence layer simulation (localStorage)

---

## 📸 Preview

![App Preview](./assets/preview.png)

---

## Author

Built as a learning project to practice React fundamentals and real-world state management patterns.