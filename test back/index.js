import express from "express";
import mongoose, { Schema } from "mongoose";
import cors from "cors";
const app = express();
const port = 3003;
app.use(express.json());
app.use(cors());

const flowerSchema = new Schema({
  image: String,
  title: String,
  price: Number,
});
const FlowerModel = mongoose.model("Flower", flowerSchema);

app.get("/", async (req, res) => {
try {
  const result = await FlowerModel.find({});
  res.send(result);
} catch (error) {
  res.send(error.message);
  
}
});
app.get("/:id", async (req, res) => {
  
  try {
    const { id } = req.params;
    const result = await FlowerModel.findById(id);
    res.send(result);
  } catch (error) {
    res.send(error.message);
    
  }
});
app.post("/", async (req, res) => {

  try {
    const { image, title, price } = req.body;
    const newResult = new FlowerModel({ image, title, price });
    await newResult.save();
    res.send("Send eledi!");
  } catch (error) {
    res.send(error.message);
    
  }
});

app.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { image, title, price } = req.body;
    const result = await FlowerModel.findByIdAndUpdate(id, {
      image,
      title,
      price,
    });
    res.send("updatelendi!");
  } catch (error) {
    res.send(error.message);
  }
});

app.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await FlowerModel.findByIdAndDelete(id);
    res.send("Got a DELETE request at /user");
  } catch (error) {
    res.send(error.message);
  }
});
mongoose
  .connect("mongodb+srv://samir:samir@cluster0.ywgcy8n.mongodb.net/")
  .then(() => console.log("Connected!"))
  .catch(() => console.log("Not Connected!"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
