const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")
(sk_test_51KkdnuSCjuX6V2MbCSUiWczLimc534tgsNkvycDJtsWElVJ0aUAfVrxRH7in6kpTaokoiOZUOA1PuEAC3GLjMGXA00pLHmu6iq)


//API

//App config
const app = express();

//middlewares

app.use(cors({origin: true}))
app.use(express.json());

//api routes
app.get('/',(request,respond) =>
respond.status(200).send('hello world'))

//listen command
exports.api = functions.https.onRequest(app)