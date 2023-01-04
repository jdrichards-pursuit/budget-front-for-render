import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

function TractEditForm() {
  let { index } = useParams();
  let navigate = useNavigate();
  const API = process.env.REACT_APP_API_URL;

  const [tract, setTract] = useState({
    item_name: "",
    amount: 0,
    date: "",
    from: "",
    category: "",
  });

  const handleTextChange = (event) => {
    setTract({ ...tract, [event.target.id]: event.target.value });
  };

  useEffect(() => {
    axios
      .get(`${API}/tracts/${index}`)
      .then((response) => {
        setTract(response.data);
      })
      .catch((error) => {
        console.log(error);
        // navigate(`/not-found`)
      });
  }, [index, navigate, API]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateLog(tract, index);
  };

  const updateLog = (updatedTransaction) => {
    axios
      .put(`${API}/tracts/${index}`, updatedTransaction)
      .then(() => {
        navigate(`/tracts/${index}`);
      })
      .catch((c) => console.warn("catch", c));
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
          value={tract.category}
          onChange={handleTextChange}
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

export default TractEditForm;
