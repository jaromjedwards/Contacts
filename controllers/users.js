// controllers/users.js
const mongodb = require("../data/database");
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
    const db = mongodb.getDatabase();
    const users = await db.collection('users').find().toArray();
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(users);
}

const getSingle = async (req, res) => {
    const userId = new ObjectId(req.params.id);
    const db = mongodb.getDatabase();
    const user = await db.collection('users').findOne({ _id: userId });
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(user);
}

module.exports = {
    getAll,
    getSingle
};
