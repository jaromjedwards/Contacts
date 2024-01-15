// controllers/contacts.js
const mongodb = require("../data/database");
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
    const db = mongodb.getDatabase();
    const contacts = await db.collection('contacts').find().toArray();
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(contacts);
}

const getSingle = async (req, res) => {
    const contactId = new ObjectId(req.params.id);
    const db = mongodb.getDatabase();
    const contact = await db.collection('contacts').findOne({ _id: contactId });
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(contact);
}

module.exports = {
    getAll,
    getSingle
};
