import express from "express";
import scrapeRoutes from "./routes/scrape/apple-music.mjs"; // Assume your routes are stored in a separate file
import cors from "cors";

const app = express();
app.use(cors());

// Ensure this comes before your routes
app.use(express.json()); // To parse JSON request bodies

// Use the router that contains the scraping route
app.use(scrapeRoutes);

// Fallback route for successful responses (or another route)
app.get("/", (req, res) => {
  res.json({ message: "Request was successful!" });
});

const port = 3000;
app.listen(port, "0.0.0.0", () => {
  console.log(`Server is running on http://0.0.0.0:${port}`);
});
