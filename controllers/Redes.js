import {Criptomoneda} from '../models/models';

// Create
export async function createRed(req, res) {
    try {
        const cripto = await Criptomoneda.findById(req.params.criptoId);
        if (!cripto) {
            return res.status(404).send("No criptomoneda found");
        }
        cripto.networks.push(req.body);
        const savedCripto = await cripto.save();
        res.status(201).send(savedCripto);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Read
export async function getRedes(req, res) {
    try {
        const cripto = await Criptomoneda.findById(req.params.criptoId);
        if (!cripto) {
            return res.status(404).send("No criptomoneda found");
        }
        res.status(200).send(cripto.networks);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Update
export async function updateRed(req, res) {
    try {
        const cripto = await Criptomoneda.findOne({ "networks._id": req.params.redId });
        if (!cripto) {
            return res.status(404).send("No red found");
        }
        const red = cripto.networks.id(req.params.redId);
        red.set(req.body);
        const savedCripto = await cripto.save();
        res.status(200).send(savedCripto);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Delete
export async function deleteRed(req, res) {
    try {
        const cripto = await Criptomoneda.findOne({ "networks._id": req.params.redId });
        if (!cripto) {
            return res.status(404).send("No red found");
        }
        cripto.networks.id(req.params.redId).remove();
        const savedCripto = await cripto.save();
        res.status(200).send({ message: "Red removed", cripto: savedCripto });
    } catch (error) {
        res.status(400).send(error);
    }
};

export default {
    createRed,
    getRedes,
    updateRed,
    deleteRed
};
