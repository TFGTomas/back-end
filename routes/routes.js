// routes.js

import { Router } from 'express';
const router = Router();

import { createUsuario, findAllUsuarios, findOneUsuario, updateUsuario, deleteUsuario } from '../controllers/Usuario';
import { createBilleteraTemp, findAllBilleterasTemp, findOneBilleteraTemp, updateBilleteraTemp, deleteBilleteraTemp } from '../controllers/BilleterasTemp';
import { createTransaccion, findAllTransacciones, findOneTransaccion, updateTransaccion, deleteTransaccion } from '../controllers/Transaccion';
import { createCriptomoneda, findAllCriptomonedas, findOneCriptomoneda, updateCriptomoneda, deleteCriptomoneda } from '../controllers/Criptomoneda';
import { createRed, getRedes, updateRed, deleteRed } from '../controllers/Redes';
import { createExchange, getExchanges, updateExchange, deleteExchange, getExchange } from '../controllers/Exchange';
import { createBilletera, getAllBilleteras} from '../controllers/Billetera'

// Routes for Usuario
router.post('/usuario', createUsuario);
router.get('/usuarios', findAllUsuarios);
router.get('/usuario/:id', findOneUsuario);
router.put('/usuario/:email', updateUsuario);
router.delete('/usuario/:id', deleteUsuario);

// Routes for BilleteraTemp
router.post('/billetera', createBilletera);
router.get('/billeteras', getAllBilleteras);

// Routes for BilleteraTemp
router.post('/billeteraTemp', createBilleteraTemp);
router.get('/billeterasTemp', findAllBilleterasTemp);
router.get('/billeteraTemp/:id', findOneBilleteraTemp);
router.put('/billeteraTemp/:id', updateBilleteraTemp);
router.delete('/billeteraTemp/:id', deleteBilleteraTemp);

// Routes for Transaccion
router.post('/transaccion', createTransaccion);
router.get('/transacciones', findAllTransacciones);
router.get('/transaccion/:id', findOneTransaccion);
router.put('/transaccion/:id', updateTransaccion);
router.delete('/transaccion/:id', deleteTransaccion);

// Routes for Criptomoneda
router.post('/criptomoneda', createCriptomoneda);
router.get('/criptomonedas', findAllCriptomonedas);
router.get('/criptomoneda/:id', findOneCriptomoneda);
router.put('/criptomoneda/:id', updateCriptomoneda);
router.delete('/criptomoneda/:id', deleteCriptomoneda);

// Routes for Redes
router.post('/red', createRed);
router.get('/redes', getRedes);
router.put('/red/:id', updateRed);
router.delete('/red/:id', deleteRed);

// Routes for Exchange
router.post('/exchange', createExchange);
router.get('/exchanges', getExchanges);
router.get('/exchange/:id', getExchange);
router.put('/exchange/:id', updateExchange);
router.delete('/exchange/:id', deleteExchange);

export default router;
