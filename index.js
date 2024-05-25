import express from "express";
import router from "./routes/router.js";

const app = express();
const PORT = process.env.PORT || 4000;

// Middlewares
router.use(express.static("assets"));

//Server start
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

app.use("/", router);
