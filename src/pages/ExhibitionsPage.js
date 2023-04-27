import React, { useEffect, useState } from "react";
import axios from "axios";
import ExhibitionItem from "../components/exhibitions/ExhibitionItem";
import "../styles/pages/ExhibitionPage.css";

const ExhibitionsPage = (props) => {
  const [loading, setLoading] = useState(false);
  const [exhibitions, setExhibitions] = useState([]);

  useEffect(() => {
    const loadExhibitions = async () => {
      setLoading(true);
      const response = await axios.get("http://localhost:3000/api/exhibitions");
      setExhibitions(response.data);
      setLoading(false);
    };
    loadExhibitions();
  }, []);
  return (
    <main>
      <div className="main-container">
        <div className="exhibitions">
          {loading ? (
            <p>Loading ...</p>
          ) : (
            exhibitions.map((item) => (
              <ExhibitionItem
                key={item.id}
                title={item.title}
                subtitle={item.subtitle}
                description={item.description}
                image={item.img}
              />
            ))
          )}
        </div>
      </div>
    </main>
  );
};
export default ExhibitionsPage;
