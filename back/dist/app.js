"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongo_config_1 = require("./config/mongo.config");
const cinemaRoutes_1 = require("./routes/cinemaRoutes");
const filmRoutes_1 = require("./routes/filmRoutes");
const salleRoutes_1 = require("./routes/salleRoutes");
const seanceRoutes_1 = require("./routes/seanceRoutes");
const ticketRoutes_1 = require("./routes/ticketRoutes");
const cors_1 = __importDefault(require("cors"));
const app = express_1.default();
const port = process.env["PORT"] || 8080;
const MONGO_USERNAME = process.env.MONGO_USERNAME;
const MONGO_PASSWORD = process.env.MONGO_PASSWORD;
app.use(express_1.default.json());
app.use(cors_1.default());
//Lancement du serveur Node
app.listen(port, () => {
    console.log(`Serveur listening on port: ${port}`);
});
//Connexion à la base de donnée
mongo_config_1.setMongoConnection();
//Définition des routes
cinemaRoutes_1.setCinemaRouting(app);
filmRoutes_1.setFilmRouting(app);
seanceRoutes_1.setSeanceRouting(app);
salleRoutes_1.setSalleRouting(app);
ticketRoutes_1.setTicketRouting(app);
//# sourceMappingURL=app.js.map