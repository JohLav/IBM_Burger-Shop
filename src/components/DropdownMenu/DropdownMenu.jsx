import "./DropdownMenu.scss";

export default function DropdownMenu() {
  return (
    <div className="d-flex">
      <button
        type="button"
        className="btn btn-secondary dropdown-toggle"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        data-bs-offset="10,20"
      >
        Offset
      </button>
      <ul className="dropdown-menu">
        <li>
          <a className="dropdown-item" href="#">
            Action
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Another action
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Something else here
          </a>
        </li>
      </ul>
    </div>
  );
}
