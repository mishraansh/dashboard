import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

function Funds() {
  return (
    <>
      <div className="funds">
        <p>Instant, zero -cost fund transfers with UPI</p>
        <Link className="btn btn-green">Add funds</Link>
        <Link className="btn btn-blue">Withdrawal</Link>
      </div>
      <div className="row">
        <div className="col">
          <span>
            <p>equity</p>
          </span>
        </div>
      </div>
    </>
  );
}

export default Funds;
