import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

function TractDetails() {
  const [tract, setTract] = useState([]);
  let { index } = useParams();
  let navigate = useNavigate();
  const API = process.env.REACT_APP_API_URL;

  useEffect(() => {
    axios
      .get(`${API}/tracts/${index}`)
      .then((response) => {
        console.log(response);
        setTract(response.data);
      })
      .catch((error) => navigate(`/not-found`));
  }, [index, navigate, API]);

  const deleteTract = () => {
    axios
      .delete(`${API}/tracts/${index}`)
      .then(() => {
        navigate(`/tracts`);
      })
      .catch((c) => console.warn("catch", c));
  };
  const handleDelete = () => {
    deleteTract();
  };
  return (
    <>
      <article>
        <h3>Item Name: {tract.item_name} </h3> <h3>Amount: {tract.amount} </h3>{" "}
        <h3>Date: {tract.date} </h3>
        <h5>Category: {tract.category}</h5>
        <h5>From: {tract.from}</h5>
      </article>
      <div className="showNavigation">
        <div>
          <Link to={`/tracts`}>
            {" "}
            <button className="show-button">Back</button>
          </Link>
        </div>

        <div>
          <Link to={`/tracts/${index}/edit`}>
            {" "}
            <button className="show-button">Edit</button>
          </Link>
        </div>
        <div>
          {" "}
          <button className="show-button" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </>
  );
}

export default TractDetails;
