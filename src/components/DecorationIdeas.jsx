import React, { useState } from "react";
import "./DecorationIdeas.css";

const DecorationIdeas = () => {
  const [decorList, setDecorList] = useState(["21 Balloons", "21 Flowers"]);
  const [newItem, setNewItem] = useState("");
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleAdd = () => {
    if (newItem.trim() !== "") {
      setDecorList([...decorList, newItem]);
      setNewItem("");
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) setUploadedImage(URL.createObjectURL(file));
  };

  return (
    <section className="decoration-section">
      <h2>Decoration Ideas</h2>
      <p className="subtitle">Submit your own ideas or choose from the list</p>

      <div className="decoration-list">
        {decorList.map((item, index) => (
          <div key={index} className="decor-item">
            {item}
          </div>
        ))}
      </div>

      <div className="decoration-form">
        <input
          type="text"
          placeholder="Type Decoration"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button onClick={handleAdd}>Add</button>
      </div>

      <div className="upload-section">
        <label>Upload Decoration Photo:</label>
        <input type="file" accept="image/*" onChange={handleImageUpload} />
        {uploadedImage && <img src={uploadedImage} alt="Uploaded" className="preview-img" />}
      </div>

      <div className="form-buttons">
        <button className="back-btn">Back</button>
        <button className="next-btn">Next</button>
      </div>
    </section>
  );
};

export default DecorationIdeas;
