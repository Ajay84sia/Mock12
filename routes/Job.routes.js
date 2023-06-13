const express = require("express");

const { JobModel } = require("../model/Job.model")

const jobRouter = express.Router();

jobRouter.post("/post", async (req, res) => {
    const { company, postedAt, city, location, role, level, contract, position, language } = req.body;
    try {
        const job = new JobModel({ company, postedAt, city, location, role, level, contract, position, language })
        await job.save();
        res.status(200).send({ "msg": "New Job posted successfully" })

    } catch (error) {
        res.status(400).send({ "error": error.message })
    }
})

jobRouter.get("/find", async (req, res) => {
    try {
        const jobs = await JobModel.find()
        res.status(200).send(jobs)

    } catch (error) {
        res.status(400).send({ "error": error.message })
    }
})

module.exports = {
    jobRouter
}