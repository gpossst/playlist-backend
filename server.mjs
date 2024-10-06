import express from "express";
import scrapeAM from "./routes/scrape/apple-music.mjs"; // Assume your routes are stored in a separate file
import createSP from "./routes/create/spotify.mjs";
import cors from "cors";

const app = express();

// Allow requests only from your frontend domain
const corsOptions = {
  origin: "https://www.playlisttransfers.app",
  methods: ["GET", "POST"], // Specify the allowed HTTP methods
  allowedHeaders: ["Content-Type", "Authorization"], // Specify the allowed headers
  credentials: true, // Allow credentials if needed
};

app.use(cors(corsOptions));

// Ensure this comes before your routes
app.use(express.json()); // To parse JSON request bodies

// Use the router that contains the scraping route
app.use(scrapeAM);
app.use(createSP);

// Fallback route for successful responses (or another route)
app.get("/", (req, res) => {
  res.json({ message: "Request was successful!" });
});

const port = 3000;
app.listen(port, "0.0.0.0", () => {
  console.log(`Server is running on http://0.0.0.0:${port}`);
});
