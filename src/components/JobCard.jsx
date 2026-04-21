function JobCard({ job, onDelete, onChangeStatus }) {
  function getStatusStyle(status) {
    switch (status) {
      case "applied":
        return "status applied";
      case "interview":
        return "status interview";
      case "rejected":
        return "status rejected";
      default:
        return "status";
    }
  }

  return (
    <div className="card">
      <h3>{job.title}</h3>
      <p>{job.company}</p>

      <p>
        Status:{" "}
        <span className={getStatusStyle(job.status)}>
          {job.status}
        </span>
      </p>

      <button onClick={() => onDelete(job.id)}>Delete</button>

      <button onClick={() => onChangeStatus(job.id, "applied")}>
        Applied
      </button>

      <button onClick={() => onChangeStatus(job.id, "interview")}>
        Interview
      </button>

      <button onClick={() => onChangeStatus(job.id, "rejected")}>
        Rejected
      </button>

      <hr />
    </div>
  );
}

export default JobCard;