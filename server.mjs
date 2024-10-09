import express from "express";
import scrapeAM from "./routes/scrape/apple-music.mjs";
import createSP from "./routes/create/spotify.mjs";
import cors from "cors";

const app = express();

// CORS options
const corsOptions = {
  origin: ["https://www.playlisttransfers.app", "http://localhost:3000"], // Replace with your frontend domain
  methods: ["GET", "POST"], // Specify allowed HTTP methods
  allowedHeaders: ["Content-Type"], // Specify allowed headers
};

app.use(cors(corsOptions)); // Apply CORS

// Middleware to parse JSON request bodies
app.use(express.json());

// Your API routes
app.use(scrapeAM);
app.use(createSP);

// Fallback route
app.get("/", (req, res) => {
  res.json({ message: "Request was successful!" });
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
