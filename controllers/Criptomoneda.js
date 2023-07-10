import { Criptomoneda } from '../models/models';

// Create
export async function createCriptomoneda(req, res) {
    const newCripto = new Criptomoneda(req.body);
    try {
        const cripto = await newCripto.save();
        res.status(201).send(cripto);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Read
export async function findAllCriptomonedas(req, res) {
    try {
        const criptos = await Criptomoneda.find();
        res.status(200).send(criptos);
    } catch (error) {
        res.status(400).send(error);
    }
};

export async function findOneCriptomoneda(req, res) {
    try {
        const cripto = await Criptomoneda.findById(req.params.id);
        if (!cripto) {
            return res.status(404).send("No criptomoneda found");
        }
        res.status(200).send(cripto);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Update
export async function updateCriptomoneda(req, res) {
    try {
        const cripto = await Criptomoneda.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!cripto) {
            return res.status(404).send("No criptomoneda found");
        }
        res.status(200).send(cripto);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Delete
export async function deleteCriptomoneda(req, res) {
    try {
        const cripto = await Criptomoneda.findByIdAndRemove(req.params.id);
        if (!cripto) {
            return res.status(404).send("No criptomoneda found");
        }
        res.status(200).send({ message: "Criptomoneda removed" });
    } catch (error) {
        res.status(400).send(error);
    }
};

export default {
    createCriptomoneda,
    findAllCriptomonedas,
    findOneCriptomoneda,
    updateCriptomoneda,
    deleteCriptomoneda
};
