import { Schema as _Schema, model } from 'mongoose';
const Schema = _Schema;

const RedSchema = new Schema({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    decimal_place: Number,
    contract_address: String,
    contract_ABI: [Schema.Types.Mixed], // Or define a more specific schema if possible
    contract_pay : String
}, {
    _id: false // We don't need an ObjectId for the subdocuments
});

const CriptoSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true
    },
    symbol: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    networks: [RedSchema]
});

// Exchange Schema
const ExchangeSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    nameExchange: {
        type: String,
        required: true
    },
    logoImg: {
        type: String,
        required: true
    },
    supported_cryptocurrencies: {
        type: [CriptoSchema],
        required: true
    }
});

const BilleteraSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    logoImg: {
        type: String,
        required: true
    },
    networks: {
        type: [RedSchema],
        required: true
    }
});

const TransaccionSchema = new Schema({
    hash: {
        type: [String],
        required: false
    },    
    user_id: {
        type: String,
        required: true
    },
    crypto_id: {
        type: String,
        required: true
    },
    amount_crypto: {
        type: Number,
        required: true
    },
    amount_fiat: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ["pending", "waiting_for_confirmations", "confirmed", "underpaid", "overpaid", "expired", "failed"],
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now,
        //required: true
    },
    network_id: {
        type: String,
        required: true
    },
    temp_wallet_id: {
        type: String,
        required: true
    },
    invoice: {
        invoice_id: {
            type: String,
            //required: true
        },
        sent: {
            type: Boolean,
            default: false,
            required: true
        },
        downloaded: {
            type: Boolean,
            default: false,
            required: true
        }
    }
});

const BilleterasTempSchema = new Schema({
    user_id: {
        type: String,
        required: true
    },
    transaction_id: {
        type: String,
        //required: true
    },
    cryptocurrency_id: {
        type: String,
        required: true
    },
    public_key: {
        type: String,
        required: true,
        unique: true
    },
    private_key_encrypted: {
        type: String,
        required: true
    },
    expiration_date: {
        type: Date,
        required: true
    }
});

const WalletSchema = new Schema({
    address: {
        type: String,
        required: true
    },
    network: {
        type: String,
        required: true
    }
}, {_id: false});

const UsuarioSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    wallets: [WalletSchema],
    transaction_ids: [{
        type: String,
    }],
    accepted_terms: {
        type: Boolean,
        required: true
    },
    accepted_publicity: {
        type: Boolean,
        required: true
    }
});

export const Criptomoneda = model('Criptomoneda', CriptoSchema);
export const Redes = model('Redes', RedSchema);
export const Exchange = model('Exchange', ExchangeSchema);
export const Billetera = model('Billetera', BilleteraSchema);
export const Transaccion = model('Transaccion', TransaccionSchema);
export const BilleterasTemp = model('BilleterasTemp', BilleterasTempSchema);
export const Usuario = model('Usuario', UsuarioSchema);
