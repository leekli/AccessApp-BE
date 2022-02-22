const AccessInfo = require("../models/accessinfo.model");

exports.getAccessInfo = async (req, res) => {
  try {
    const allAccessInfo = await AccessInfo.find();
    res.status(200).json(allAccessInfo);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

exports.getAccessInfoById = async (req, res) => {
  try {
    const returnedAccessInfo = await AccessInfo.findById(req.params.id);
    res.status(200).json(returnedAccessInfo);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

exports.postAccessInfo = async (req, res) => {
  const newItem = new AccessInfo({
    _id: req.body._id,
    name: req.body.name,
    wheelchair: req.body.wheelchair,
    wheelchairDesc: req.body.wheelchairDesc,
  });

  try {
    const savedPost = await newItem.save();
    res.status(201).json(savedPost);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

exports.patchAccessInfoById = async (req, res) => {
  try {
    const updatedItem = await AccessInfo.updateOne(
      { _id: req.params.id },
      {
        $set: {
          wheelchair: req.body.wheelchair,
          wheelchairDesc: req.body.wheelchairDesc,
        },
      }
    );
    res.status(200).json(updatedItem);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

exports.deleteAccessInfoById = async (req, res) => {
  try {
    const removedItem = await AccessInfo.deleteOne({ _id: req.params.id });
    res.status(204).json(removedItem);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};