import React, { useState, useEffect } from "react";
import { getContents, deleteContent } from "../services/api";
import { Link } from "react-router-dom";
import Loader from "./Loader";

function ContentList() {
  const [contents, setContents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getContents()
      .then((response) => {
        setContents(response.data);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleDelete = (id) => {
    deleteContent(id)
      .then(() => setContents(contents.filter((item) => item.id !== id)))
      .catch((error) => console.error(error));
  };

  return loading ? (
    <Loader />
  ) : (
    <div>
      <h2>Content List</h2>
      {contents.map((content) => (
        <div key={content.id} className="content-card">
          <h3>{content.title}</h3>
          <p>{content.body}</p>
          <div>
            <Link to={`/edit/${content.id}`}>Edit</Link>
            <button onClick={() => handleDelete(content.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ContentList;
