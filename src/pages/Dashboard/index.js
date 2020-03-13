import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
import "./styles.css";

export default function Dashboard() {
  const [spots, setSpots] = useState([]);

  useEffect(() => {
    async function loadSpots() {
      const user_id = localStorage.getItem("user");
      const response = await api.get("/dashboard", {
        headers: { user_id }
      });

      setSpots(response.data);
    }

    loadSpots();
  }, []);

  return (
    <>
      <ul className="spot-list">
        {spots.map(spot => (
          <li key={spot._id}>
            <header
              style={{
                backgroundPosition: "center",
                backgroundImage: `url(${spot.thumbnail_url})`
              }}
            ></header>
            <strong>{spot.company}</strong>
            {/* {spot.techs.map(tech => (
              <div key={tech} className="tech">
                {tech}
              </div>
            ))} */}

            <span>{spot.price ? `R$${spot.price}/dia` : `Gratuíto`}</span>
          </li>
        ))}
      </ul>
      <Link to="/new">
        <button className="btn"> Cadastrar novo spot </button>
      </Link>
    </>
  );
}
