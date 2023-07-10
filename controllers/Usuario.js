import {Usuario} from '../models/models';

// Create a new user
export async function createUsuario(req, res) {
    const newUsuario = new Usuario(req.body);

    try {
        const data = await newUsuario.save();
        res.status(201).send(data);
    } catch (error) {
        console.error(error);
        res.status(500).send({
            message: error.message || 'Some error occurred while creating the Usuario.'
        });
    }
}

// Retrieve all users
export async function findAllUsuarios(req, res) {
    try {
        const data = await Usuario.find({});
        res.send(data);
    } catch (error) {
        res.status(500).send({
            message: error.message || 'Some error occurred while retrieving Usuarios.'
        });
    }
}

// Find a single user with an id
// Find a single user with an id
export async function findOneUsuario(req, res) {
    const email = req.params.id;

    try {
        const data = await Usuario.findOne({ email: email });

        if (!data) {
            return res.status(404).json({ exist: false, message: `Not found Usuario with email ${email}` });
        } else {
            return res.status(200).json({ exist: true, data });
        }
    } catch (error) {
        res.status(500).send({
            message: `Error retrieving Usuario with email ${email}`
        });
    }
}

// TODO otherfileds posiblemente no funcione
// Update a user by the id in the request
export async function updateUsuario(req, res) {
    if (!req.body) {
        return res.status(400).send({
            message: 'Data to update can not be empty!'
        });
    }

    const email = req.params.email;

    try {
        // Separate wallets and transaction_ids from other fields
        const { wallets, transaction_ids, ...otherFields } = req.body;

        // Construct update query
        const updateQuery = { ...otherFields };
        if (wallets) {
            updateQuery.$addToSet = { wallets: { $each: wallets } };
        }
        if (transaction_ids) {
            if (!updateQuery.$addToSet) {
                updateQuery.$addToSet = {};
            }
            updateQuery.$addToSet.transaction_ids = { $each: transaction_ids };
        }

        const data = await Usuario.findOneAndUpdate({ email: email }, updateQuery, { new: true, useFindAndModify: false });

        if (!data) {
            res.status(404).send({
                message: `Cannot update Usuario with email=${email}. Maybe Usuario was not found!`
            });
        } else {
            res.send({ message: 'Usuario was updated successfully.' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send({
            message: `Error updating Usuario with email=${email}`
        });
    }
}


// Delete a user with the specified id
export async function deleteUsuario(req, res) {
    const id = req.params.id;

    try {
        const data = await Usuario.findByIdAndRemove(id, { useFindAndModify: false });

        if (!data) {
            res.status(404).send({
                message: `Cannot delete Usuario with id=${id}. Maybe Usuario was not found!`
            });
        } else {
            res.send({
                message: 'Usuario was deleted successfully!'
            });
        }
    } catch (error) {
        res.status(500).send({
            message: `Could not delete Usuario with id=${id}`
        });
    }
}

export default {
    createUsuario,
    findAllUsuarios,
    findOneUsuario,
    updateUsuario,
    deleteUsuario
};
