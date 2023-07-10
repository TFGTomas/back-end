import {BilleterasTemp} from '../models/models';

// Create a new temporary wallet
export async function createBilleteraTemp(req, res) {
    const newBilleteraTemp = new BilleterasTemp(req.body);

    try {
        const data = await newBilleteraTemp.save();
        res.status(201).send(data);
    } catch (error) {
        res.status(500).send({
            message: error.message || 'Some error occurred while creating the Billetera Temp.'
        });
    }
}

// Retrieve all temporary wallets
export async function findAllBilleterasTemp(req, res) {
    try {
        const data = await BilleterasTemp.find({});
        res.send(data);
    } catch (error) {
        res.status(500).send({
            message: error.message || 'Some error occurred while retrieving Billeteras Temp.'
        });
    }
}

// Find a single temporary wallet with an id
export async function findOneBilleteraTemp(req, res) {
    const id = req.params.id;

    try {
        const data = await BilleterasTemp.findById(id);

        if (!data) {
            res.status(404).send({ message: `Not found Billetera Temp with id ${id}` });
        } else {
            res.send(data);
        }
    } catch (error) {
        res.status(500).send({
            message: `Error retrieving Billetera Temp with id ${id}`
        });
    }
}

// Update a temporary wallet by the id in the request
export async function updateBilleteraTemp(req, res) {
    if (!req.body) {
        return res.status(400).send({
            message: 'Data to update can not be empty!'
        });
    }

    const id = req.params.id;

    try {
        const data = await BilleterasTemp.findByIdAndUpdate(id, req.body, { useFindAndModify: false });

        if (!data) {
            res.status(404).send({
                message: `Cannot update Billetera Temp with id=${id}. Maybe Billetera Temp was not found!`
            });
        } else {
            res.send({ message: 'Billetera Temp was updated successfully.' });
        }
    } catch (error) {
        res.status(500).send({
            message: `Error updating Billetera Temp with id=${id}`
        });
    }
}

// Delete a temporary wallet with the specified id
export async function deleteBilleteraTemp(req, res) {
    const id = req.params.id;

    try {
        const data = await BilleterasTemp.findByIdAndRemove(id, { useFindAndModify: false });

        if (!data) {
            res.status(404).send({
                message: `Cannot delete Billetera Temp with id=${id}. Maybe Billetera Temp was not found!`
            });
        } else {
            res.send({
                message: 'Billetera Temp was deleted successfully!'
            });
        }
    } catch (error) {
        res.status(500).send({
            message: `Could not delete Billetera Temp with id=${id}`
        });
    }
}

export default {
    createBilleteraTemp,
    findAllBilleterasTemp,
    findOneBilleteraTemp,
    updateBilleteraTemp,
    deleteBilleteraTemp
};
