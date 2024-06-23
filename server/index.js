import express from "express";
import dotenv from "dotenv";
import multer from "multer";
import mongoose from "mongoose";

//basic code
dotenv.config();
const app = express();
const port = process.env.PORT || 5001;

//code starts from here
app.get("/", (req, res) => {
    res.send("hello this is backend server");
});

app.listen(port, () => {
    console.log("server listening on port " + port);
});
