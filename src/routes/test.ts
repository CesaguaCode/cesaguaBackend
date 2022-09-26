import express from "express";
import TestController from "../controllers/test";

export default class TestRouter {

    #router;
    #controller;

    constructor(){
        this.#controller = new TestController();
        this.#router = express.Router();

        this.#router.get('/', ( async (req, res) => {
            res.status(200).json({ state: "success" })
        }))

        this.#router.post('/', ((req, res) => {
            res.status(200).json({ state: "success" });
        }))

    }

    get router(){
        return this.#router;
    }
}

express.Router()