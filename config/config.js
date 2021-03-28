const PORT = process.env.PORT || 3000;
const SEED = process.env.SEED || 'seed-de-la-tienda-de-libros';
const TIME_TOKEN = process.env || 60 * 60 + 24 + 30;

const MONGO_USER = process.env.MONGO_USER || "";
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || "";
const MONGO_URL = process.env.MONGO_URL || "mongodb://localhost:27017/tienda_libros-dev";

module.exports = {
    PORT,
    SEED,
    TIME_TOKEN,
    MONGO_USER,
    MONGO_PASSWORD,
    MONGO_URL
}