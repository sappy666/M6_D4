import Router from "express";
import Jimp from "jimp";
import { v4 as uuidv4 } from "uuid";
import path from "path";

const __dirname = path.resolve();
const router = Router();

// Routes
router.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

router.get("/bw", async (req, res) => {
  const { imagen } = req.query;
  const image = await Jimp.read(imagen);
  const imageName = `image-${uuidv4().slice(0, 8)}.jpg`;
  await image
    .resize(350, Jimp.AUTO)
    .greyscale()
    .writeAsync(__dirname + `/assets/images/${imageName}`);

  res.sendFile(__dirname + "/assets/images/" + imageName);
});

export default router;
