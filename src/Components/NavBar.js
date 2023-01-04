import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <h1 style={{ fontSize: "1.3em" }}>
        <Link to="/tracts">Budget App</Link>
      </h1>
      <button>
        <Link style={{ color: "#2b2a27" }} to="/tracts/new">
          New Transaction
        </Link>
      </button>
    </nav>
  );
}
