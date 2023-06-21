import User from "../models/User.js";

//UPDATE
export const updateUser = async (req, res, next) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    next(err);
  }
};

//DELETE
export const deleteUser = async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been deleted.");
  } catch (err) {
    next(err);
  }
};

//GET
export const getUser = async (req, res, next) => {
  try {
    const displayUser = await User.findById(req.params.id);
    res.status(200).json(displayUser);
  } catch (err) {
    next(err);
  }
};

//GET ALL
export const getUsers = async (req, res, next) => {
  try {
    const displayUsers = await User.find();
    res.status(200).json(displayUsers);
  } catch (err) {
    next(err);
  }
};
