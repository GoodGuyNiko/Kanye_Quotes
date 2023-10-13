import express from "express"
import axios from "axios"

const app = express ();
const port = 3000;
const API_URL = "https://api.kanye.rest"

app.use(express.static("./public"));

app.get("/", async (req, res) => {
    try {
      const response = await axios.get("https://api.kanye.rest");
      const result = response.data;
      res.render("index.ejs", { data: result });
    } catch (error) {
      console.error("Failed to make request:", error.message);
      res.render("index.ejs", {
        error: error.message,
      });
    }
});

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
  