import React, { useEffect, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./addPage.scss";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
function AddPage() {
  const [dbData, setDbData] = useState([]);
  async function getFetch() {
    const result = await fetch("http://localhost:3003/");
    const data = await result.json();
    setDbData(data);
  }
  useEffect(() => {
    getFetch();
  }, []);
  async function addFlower(value) {
  await  fetch("http://localhost:3003/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(value),
    });
    await getFetch()
  }
  function deleteFlower(id) {
    fetch('http://localhost:3003/'+id, { method: 'DELETE' })
    .then(()=>setDbData((prevData)=>prevData.filter((x)=>x._id!==id)))
  }
  return (
    <>
    <div>  
        <Helmet>
        <title>Add Page | New Flowers!</title>

        </Helmet>
        
        </div>
      <Formik
        initialValues={{ image: "", title: "", price: "" }}
        validationSchema={Yup.object({
          image: Yup.string()
            .max(255, "Must be 15 characters or less")
            .required("Required"),
          title: Yup.string()
            .max(50, "Must be 20 characters or less")
            .required("Required"),
          price: Yup.string()
            .max(50, "Must be 20 characters or less")
            .required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            addFlower(values);
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form className="form">
          <label htmlFor="image">Image Url</label>
          <Field name="image" type="text" />
          <ErrorMessage name="image" />

          <label htmlFor="title">Title</label>
          <Field name="title" type="text" />
          <ErrorMessage name="title" />

          <label htmlFor="price">Price </label>
          <Field name="price" type="price" />
          <ErrorMessage name="price" />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
      <table className="table">
        <tr>
          <th>Image URL</th>
          <th>Title</th>
          <th>Price</th>
          <th>Opertions</th>

        </tr>
        {dbData.map((x) => (
          <tr>
            <td><img src={x.image} alt="" /></td>
            <td>{x.title}</td>
            <td>{x.price}</td>
            <td><i onClick={()=>deleteFlower(x._id)} className="fa-solid fa-trash"></i> <Link to={"/edit/"+x._id}><i class="fa-solid fa-pen"></i></Link></td>
          </tr>
        ))}
      </table>
    </>
  );
}

export default AddPage;
