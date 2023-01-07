import axios from "axios";
import { useState, useEffect } from "react";
import Tract from "./Tract";
const API = process.env.REACT_APP_API_URL;

function Tracts() {
  const [tracts, setTracts] = useState([]);

  function getBalance2(t) {
    return t.reduce((acc, curr) => {
      return (acc += +curr.amount);
    }, 0);
  }

  useEffect(() => {
    axios
      .get(`${API}/tracts`)
      .then((response) => {
        console.log("r", response);
        setTracts(response.data);
      })
      .catch((c) => console.warn("catch", c));
  }, []);
  return (
    <div className="Logs">
      <h1 style={{ textAlign: "center" }}>
        Account Balance: {tracts.length > 0 && getBalance2(tracts)}
      </h1>
      <section>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Item</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {tracts.map((tract) => {
              console.log(tract);
              return <Tract key={tract.id} tract={tract} index={tract.id} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Tracts;
