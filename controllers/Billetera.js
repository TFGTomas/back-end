import {Billetera} from '../models/models';

export async function createBilletera(req, res) {
    const newBilletera = new Billetera(req.body);

    try {
        const billetera = await newBilletera.save();
        res.status(201).send(billetera);
    } catch (err) {
        res.status(500).send({ message: err.message || "Error occurred while creating the Billetera." });
    }
}

export async function getAllBilleteras(req, res) {
    try {
        const billeteras = await Billetera.find();
        res.status(200).send(billeteras);
    } catch (err) {
        res.status(500).send({ message: err.message || "Error occurred while retrieving billeteras." });
    }
}

export async function getBilletera(req, res) {
    try {
        const billetera = await Billetera.findById(req.params.id);
        if (billetera) {
            res.status(200).send(billetera);
        } else {
            res.status(404).send({ message: "No Billetera found with id " + req.params.id });
        }
    } catch (err) {
        res.status(500).send({ message: "Error retrieving Billetera with id " + req.params.id });
    }
}

export async function updateBilletera(req, res) {
    if(!req.body) {
        return res.status(400).send({ message: "Data to update can not be empty!" });
    }

    try {
        const billetera = await Billetera.findByIdAndUpdate(req.params.id, req.body, { useFindAndModify: false });
        if (billetera) {
            res.status(200).send({ message: "Billetera was updated successfully." });
        } else {
            res.status(404).send({ message: `Cannot update Billetera with id=${req.params.id}. Maybe Billetera was not found!` });
        }
    } catch (err) {
        res.status(500).send({ message: "Error updating Billetera with id=" + req.params.id });
    }
}

export async function deleteBilletera(req, res) {
    try {
        const billetera = await Billetera.findByIdAndRemove(req.params.id);
        if (billetera) {
            res.status(200).send({ message: "Billetera was deleted successfully!" });
        } else {
            res.status(404).send({ message: `Cannot delete Billetera with id=${req.params.id}. Maybe Billetera was not found!` });
        }
    } catch (err) {
        res.status(500).send({ message: "Could not delete Billetera with id=" + req.params.id });
    }
}
export default {
    createBilletera,
    getAllBilleteras,
    getBilletera,
    updateBilletera,
    deleteBilletera
};

