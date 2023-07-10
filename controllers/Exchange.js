import { Exchange } from '../models/models';

// Create
export async function createExchange(req, res) {
    const exchange = new Exchange(req.body);
    try {
        const savedExchange = await exchange.save();
        res.status(201).send(savedExchange);
    } catch (error) {
        res.status(400).send(error);
    }
};

// ReadcreateExchange
export async function getExchanges(req, res) {
    try {
        const exchanges = await Exchange.find();
        res.status(200).send(exchanges);
    } catch (error) {
        res.status(400).send(error);
    }
};

export async function getExchange(req, res) {
    try {
        const exchange = await Exchange.findById(req.params.exchangeId);
        if (!exchange) {
            return res.status(404).send('No exchange found');
        }
        res.status(200).send(exchange);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Update
export async function updateExchange(req, res) {
    try {
        const exchange = await Exchange.findById(req.params.exchangeId);
        if (!exchange) {
            return res.status(404).send('No exchange found');
        }
        exchange.set(req.body);
        const savedExchange = await exchange.save();
        res.status(200).send(savedExchange);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Delete
export async function deleteExchange(req, res) {
    try {
        const exchange = await Exchange.findById(req.params.exchangeId);
        if (!exchange) {
            return res.status(404).send('No exchange found');
        }
        await exchange.remove();
        res.status(200).send({ message: 'Exchange removed' });
    } catch (error) {
        res.status(400).send(error);
    }
};

export default {
    createExchange,
    getExchanges,
    getExchange,
    updateExchange,
    deleteExchange,
};
