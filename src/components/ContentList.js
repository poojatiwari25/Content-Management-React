import React, { useState, useEffect } from "react";
import { getContents, deleteContent } from "../services/api";
import { Link } from "react-router-dom";
import Loader from "./Loader";
import ContentForm from "./ContentForm"; 
import './ContentList.css';

function ContentList() {
  const [contents, setContents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getContents()
      .then((response) => {
        setContents(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  const handleDelete = (id) => {
    deleteContent(id)
      .then(() => setContents(contents.filter((item) => item.id !== id)))
      .catch((error) => console.error(error));
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="main-content">
      {contents.length === 0 ? (
        <ContentForm />
      ) : (
        <>
          <h2>Content List</h2>
          <div className="content-list-container">
            {contents.map((content) => (
              <div key={content.id} className="content-card">
                <h3>{content.title}</h3>
                <p>{content.body}</p>
                <div className="content-actions">
                  <Link to={`/edit/${content.id}`} className="action-button edit">
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(content.id)}
                    className="action-button delete"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default ContentList;
