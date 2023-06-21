import express from "express";
import {
  updateUser,
  deleteUser,
  getUser,
  getUsers,
} from "../controllers/user.js";

import { verifyToken, verifyAdmin, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// router.get("/checkauthentication", verifyToken, (req, res, next) => {
//   res.send("hello user, you are authenticated!");
// });

// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//   res.send("hello user,you are authenticated and you can delete your account");
// });

// router.get("/checkAdmin/:id", verifyAdmin, (req, res, next) => {
//   res.send("hello Admin,you are authenticated and you can delete all accounts");
// });

//UPDATE
router.put("/:id", verifyUser, updateUser);

//DELETE
router.delete("/:id", verifyUser, deleteUser);

//GET
router.get("/:id", verifyUser, getUser);

//GET ALL
router.get("/", verifyAdmin, getUsers);

export default router;
