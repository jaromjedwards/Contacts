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
    const response = await mongodb.getDatabase().db().collection('Contacts').insertOne(contact);
    if (response.acknowledged) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occurred while creating the contact');
    }
};
const updateContact = async (req, res) => {
    const contactId = new ObjectId(req.params.id);
    console.log('Contact ID Type:', typeof contactId);

    const contact = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday
    };

    console.log('Contact ID:', contactId);
    console.log('Updated Contact:', contact);

    try {
        const response = await mongodb.getDatabase().db().collection('Contacts').replaceOne({ _id: contactId }, contact);
        console.log('ReplaceOne Response:', response);

        if (response.modifiedCount > 0) {
            res.status(204).send();
        } else {
            res.status(500).json({ error: 'No contact updated' });
        }
    } catch (error) {
        console.error('Error updating contact:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const deleteContact = async (req, res) => {
    const contactId = new ObjectId(req.params.id);

    const response = await mongodb.getDatabase().db().collection('Contacts').deleteOne({ _id: contactId });

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
