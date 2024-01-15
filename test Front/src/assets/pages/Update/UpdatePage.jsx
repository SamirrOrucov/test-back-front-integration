import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate, useParams } from "react-router-dom";

function UpdatePage() {

  const navigate=useNavigate()
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const { id } = useParams();
  async function getFetch() {
    const result = await fetch("http://localhost:3003/" + id);
    const data = await result.json();
    setImage(data.image);
    setTitle(data.title);
    setPrice(data.price);
  }

  async function updateFlower(e) {
    e.preventDefault();
    fetch("http://localhost:3003/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: title, image: image, price: price }),
    })
    .then((x)=>navigate("/addpage"))
  }
  useEffect(() => {
    getFetch();
  }, []);
  return (
    <div>
      <div>  
        <Helmet>
        <title>Update | Same Flowers but new Touches!</title>

        </Helmet>
        
        </div>
      <form action="" onSubmit={updateFlower}>
        <input
          type="text"
          name="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          id=""
        />
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          id=""
        />
        <input
          type="text"
          name="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          id=""
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default UpdatePage;
