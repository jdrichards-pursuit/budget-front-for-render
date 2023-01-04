import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function TractNewForm(props) {
  let navigate = useNavigate();

  const [tract, setTract] = useState({
    item_name: "",
    amount: 0,
    date: "",
    from: "",
    category: "",
  });

  const addTract = (newTransaction) => {
    axios
      .post(`${API}/tracts`, newTransaction)
      .then(() => {
        navigate(`/tracts`);
      })
      .catch((c) => console.warn("catch", c));
  };

  const handleTextChange = (event) => {
    setTract({ ...tract, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    addTract(tract);
  };

  return (
    <div className="New">
      <form onSubmit={handleSubmit}>
        <label htmlFor="item_name">Item Name:</label>
        <input
          id="item_name"
          value={tract.item_name}
          type="text"
          onChange={handleTextChange}
        />
        <label htmlFor="amount">Amount</label>
        <input
          id="amount"
          type="text"
          value={tract.amount}
          onChange={handleTextChange}
        />
        <label htmlFor="date">Date:</label>
        <input
          id="date"
          type="date"
          value={tract.date}
          onChange={handleTextChange}
        />
        <label htmlFor="from">From:</label>
        <input
          id="from"
          type="text"
          value={tract.from}
          onChange={handleTextChange}
        />
        <label htmlFor="category">Category:</label>
        <input
          id="category"
          type="text"
          onChange={handleTextChange}
          checked={tract.category}
        />

        <br />
        <input type="submit" />
      </form>
      <Link className="back" to="/tracts">
        <button>Back</button>
      </Link>
    </div>
  );
}

export default TractNewForm;
