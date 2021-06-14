import { Router } from "express";


const router = Router();

router.get("/", (req, res) => {
  return res.status(200).send({
    message: "welcome to musement app",
  });
});

router.get("/welcome", (req, res) => {
  return res.status(200).send({
    message: "welcome to musement app",
  });
});

export default router;


