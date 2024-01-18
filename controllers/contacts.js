// controllers/contacts.js
const mongodb = require("../data/database");
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
    const result = await mongodb.getDatabase().db().collection('Contacts').find().toArray();
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(result);
}

const getSingle = async (req, res) => {
    const contactId = new ObjectId(req.params.id);
    const db = mongodb.getDatabase();
    const contact = await db.db().collection('Contacts').findOne({ _id: contactId });
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(contact);
};

const createContact = async (req, res) => {
    const contact = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday
    };
    const response = await mongodb.getDatabase().db().collection('users').insertOne(user);
    if (respose.acknowledged) {
        res.status(204).send();
    } else {
        res.status(500).json(respnse.error || 'Some error occured while updating the contact')
    }
}
const updateContact = async (req, res) => {
    const contactId = new ContactId(req.params.id);
    const contact = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday
    };
    const response = await mongodb.getDatabase().db().collection('users').replaceOne({ _id: userId }, user);
    if (respose.modifiedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(respnse.error || 'Some error occured while updating the contact')
    }
}
const deleteContact = async (req, res) => {
    const contactId = new ContactId(req.params.id);

    const response = await mongodb.getDatabase().db().collection('users').deleteOne({ _id: contactId });

    if (response.deletedCount > 0) {
        res.status(204).send();
    } else {
        res.status(404).json({ error: 'Contact not found' });
    }
}
module.exports = {
    getAll,
    getSingle,
    createContact,
    updateContact,
    deleteContact
};
