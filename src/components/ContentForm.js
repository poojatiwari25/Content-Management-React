import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createContent, updateContent, getContents } from "../services/api";

function ContentForm() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getContents()
        .then((response) => {
          const content = response.data.find((item) => item.id === parseInt(id));
          if (content) {
            setTitle(content.title);
            setBody(content.body);
          }
        })
        .catch((error) => console.error(error));
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { title, body };

    const apiCall = id ? updateContent(id, data) : createContent(data);

    apiCall
      .then(() => navigate("/"))
      .catch((error) => console.error(error));
  };

  return (
    <div className="form-container">
    <form onSubmit={handleSubmit}>
      <h2>{id ? "Edit Content" : "Add Content"}</h2>
      <div>
        <label>Title</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} required />
      </div>
      <div>
        <label>Body</label>
        <textarea value={body} onChange={(e) => setBody(e.target.value)} required />
      </div>
      <button type="submit">{id ? "Update" : "Create"}</button>
    </form>
    </div>
  );
}

export default ContentForm;
