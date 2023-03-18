"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const schema_1 = require("./libs/schema/schema");
const router = (0, express_1.Router)();
/**
 * @swagger
 * /health-check:
 *   get:
 *     tags:
 *       - General
 *     description: Health Check
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: I am OK
 */
router.get('/health-check', (req, res) => {
    res.send('I am OK');
});
router.post('/candidate', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const resCandidate = new schema_1.Candidate(req.body);
        console.log("req.body:::::::::::::", req.body);
        const insertCandidateRecords = yield resCandidate.save();
        res.send(insertCandidateRecords);
    }
    catch (e) {
        console.log("-----error", e);
        res.send(e);
    }
}));
exports.default = router;
