import "./StatusNav.css";
function StatusNav({status, setStatus}) {
  const changeStatus = (event) => {
    setStatus(event.target.innerHTML);
  };
  return (
    <div className="container">
      <ul className="status-items-list">
        <li className="status-item">
          <button
            onClick={changeStatus}
            className={`status-btn ${status === "to read" && "active"}`}
          >
            to read
          </button>
        </li>
        <li className="status-item">
          <button
            onClick={changeStatus}
            className={`status-btn ${status === "reading" && "active"}`}
          >
            reading
          </button>
        </li>
        <li className="status-item">
          <button
            onClick={changeStatus}
            className={`status-btn ${status === "have read" && "active"}`}
          >
            have read
          </button>
        </li>
      </ul>
    </div>
  );
}

export default StatusNav;
