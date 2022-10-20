import React from "react";
import "../App.css";
import { GrUploadOption } from "react-icons/gr";
// import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddForm = () => {
  const history = useNavigate();
  const [data, setData] = useState({
    name: "",
    image: "",
  });
  const handleChange = (name) => (e) => {
    let value = name === "image" ? e.target.files[0] : e.target.value;
    setData({ ...data, [name]: value });
  };
  const removeSelectedImage = () => {
    setData((data.image = ""));
  };
  console.log(data);
  const handleSubmit = async () => {
    try {
      let formData = new FormData();
      formData.append("image", data.image);
      formData.append("name", data.name);

      const res = await fetch(`/api/v1/contacts/add`, {
        method: "POST",
        body: formData,
      });
      if (res.ok) {
        setData({ name: "", image: "" });
        history("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main>
      <section className="container">
        <div>
          <h3>Add contact</h3>
        </div>

        {data.image && (
          <div style={styles.preview}>
            <img
              src={URL.createObjectURL(data.image)}
              style={styles.image}
              alt="Thumb"
            />
            <button onClick={removeSelectedImage} style={styles.delete}>
              Remove This Image
            </button>
          </div>
        )}
        <input
          className="form-control"
          type="file"
          accept="image/*"
          name="image"
          style={{ display: "none" }}
          id="icon-file"
          onChange={handleChange("image")}
        />
        <label htmlFor="icon-file" style={styles.icon}>
          <div>
            <GrUploadOption style={{ color: "#1231c9", fontSize: "40",marginRight:'10' }} /> Upload
          </div>
        </label>
        <input
          className="form-control"
          placeholder="Enter name"
          type="text"
          name="name"
          value={data.name}
          onChange={handleChange("name")}
        />
        <button className="save" onClick={handleSubmit}>
          Save
        </button>
      </section>
    </main>
  );
};

export default AddForm;

// Just some styles
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
  },
  preview: {
    marginTop: 10,
    display: "flex",
    flexDirection: "column",
  },
  image: { maxWidth: "100%", height: 120, width: 120, borderRadius: "50%" },
  delete: {
    cursor: "pointer",
    padding: 15,
    marginBottom:"1rem",
    background: "red",
    color: "white",
    border: "none",
    outline: "white",
  },
  icon: {
    textAlign: "center",
    cursor:"pointer"
  },
};
