import { useState, useEffect } from "react";
import JobCard from "./components/JobCard";
import "./styles/jobCard.css";

function App() {
  const [jobs, setJobs] = useState(() => {
    const savedJobs = localStorage.getItem("jobs");

    if (savedJobs) {
      return JSON.parse(savedJobs);
    }

    return [
      {
        id: 1,
        title: "Frontend Developer",
        company: "Google",
        status: "applied",
      },
      {
        id: 2,
        title: "React Developer",
        company: "Meta",
        status: "interview",
      },
      {
        id: 3,
        title: "Junior Dev",
        company: "Startup XYZ",
        status: "rejected",
      },
    ];
  });

  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [filter, setFilter] = useState("all");
  useEffect(() => {
    localStorage.setItem("jobs", JSON.stringify(jobs));
  }, [jobs])

  function handleAddJob() {
    if (!title.trim() || !company.trim()) return;

    const newJob = {
      id: Date.now(),
      title,
      company,
      status: "applied",
    };

    setJobs((prevJobs) => [...prevJobs, newJob]);
    setTitle("");
    setCompany("");
  }

  function handleDeleteJob(id) {
    setJobs((prevJobs) => prevJobs.filter((job) => job.id !== id));
  }

  function handleChangeStatus(id, newStatus) {
    setJobs((prevJobs) =>
      prevJobs.map((job) =>
        job.id === id ? { ...job, status: newStatus } : job
      )
    );
  }

  const filteredJobs = jobs.filter((job) => {
    if (filter === "all") return true;
    return job.status === filter;
  });

  return (
    <div>
      <h1>Job Tracker</h1>

      <p>Jobs count: {filteredJobs.length}</p>

      <hr />

      <h2>Add Job</h2>
      <input
        type="text"
        placeholder="Job Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <br />

      <input
        type="text"
        placeholder="Company"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />

      <br />

      <button onClick={handleAddJob}>Add</button>

      <hr />

      <h2>Filter Jobs</h2>

      <button onClick={() => setFilter("all")}>All</button>
      <button onClick={() => setFilter("applied")}>Applied</button>
      <button onClick={() => setFilter("interview")}>Interview</button>
      <button onClick={() => setFilter("rejected")}>Rejected</button>

      <hr />

      <h2>Jobs List</h2>

      {filteredJobs.length === 0 ? (
        <p>No jobs found.</p>
      ) : (
        filteredJobs.map((job) => (
          <JobCard
            key={job.id}
            job={job}
            onDelete={handleDeleteJob}
            onChangeStatus={handleChangeStatus}
          />
        ))
      )}
    </div>
  );
}

export default App;