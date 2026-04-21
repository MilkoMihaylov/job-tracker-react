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

<img width="843" height="674" alt="job-tracker-main" src="https://github.com/user-attachments/assets/d489f2a9-c4a9-4b02-8fbe-784766291d3d" />


---

## Author

Built as a learning project to practice React fundamentals and real-world state management patterns.
