import express from "express";

const app = express();

// config ejs
app.set("view engine", "ejs");
app.set("views", "views");

app.get("/", (req, res) => {
  res.render("index", {
    title: "Hello",
    message: "Hello I'm EJS",
    people: ['Ashiq', "chester", "bro"],
  });
});
app.listen(8000, () => {
  console.log(`Server is running on localhost:8000`);
});