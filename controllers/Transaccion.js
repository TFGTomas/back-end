import {Transaccion} from '../models/models';

// Create a new transaction
export async function createTransaccion(req, res) {
    const newTransaccion = new Transaccion(req.body);

    try {
        const data = await newTransaccion.save();
        res.status(201).send(data);
    } catch (error) {
        res.status(500).send({
            message: error.message || 'Some error occurred while creating the Transaccion.'
        });
    }
}

// Retrieve all transactions
export async function findAllTransacciones(req, res) {
    try {
        const data = await Transaccion.find({});
        res.send(data);
    } catch (error) {
        res.status(500).send({
            message: error.message || 'Some error occurred while retrieving Transacciones.'
        });
    }
}

// Find a single transaction with an id
export async function findOneTransaccion(req, res) {
    const id = req.params.id;

    try {
        const data = await Transaccion.findById(id);

        if (!data) {
            res.status(404).send({ message: `Not found Transaccion with id ${id}` });
        } else {
            res.send(data);
        }
    } catch (error) {
        res.status(500).send({
            message: `Error retrieving Transaccion with id ${id}`
        });
    }
}

// Update a transaction by the id in the request
export async function updateTransaccion(req, res) {
    if (!req.body) {
        return res.status(400).send({
            message: 'Data to update can not be empty!'
        });
    }

    const id = req.params.id;

    try {
        const data = await Transaccion.findByIdAndUpdate(id, req.body, { useFindAndModify: false });

        if (!data) {
            res.status(404).send({
                message: `Cannot update Transaccion with id=${id}. Maybe Transaccion was not found!`
            });
        } else {
            res.send({ message: 'Transaccion was updated successfully.' });
        }
    } catch (error) {
        res.status(500).send({
            message: `Error updating Transaccion with id=${id}`
        });
    }
}

// Delete a transaction with the specified id
export async function deleteTransaccion(req, res) {
    const id = req.params.id;

    try {
        const data = await Transaccion.findByIdAndRemove(id, { useFindAndModify: false });

        if (!data) {
            res.status(404).send({
                message: `Cannot delete Transaccion with id=${id}. Maybe Transaccion was not found!`
            });
        } else {
            res.send({
                message: 'Transaccion was deleted successfully!'
            });
        }
    } catch (error) {
        res.status(500).send({
            message: `Could not delete Transaccion with id=${id}`
        });
    }
}

export default {
    createTransaccion,
    findAllTransacciones,
    findOneTransaccion,
    updateTransaccion,
    deleteTransaccion
};
