import { PrismaClient } from "@prisma/client";
import express from "express";

const app = express();
const client = new PrismaClient();

app.post("/", async(req, res) => {
    await client.user.create({
        data: {
            username: Math.random().toString(),
            password: Math.random().toString()
        }
    })
    res.json({
        msg: "post end-point"
    })
})

app.get("/", async(req, res) => {
    const users = await client.user.findMany({});

    res.json({
        users
    })
})

app.listen(3000, () => {
    console.log('server is listening at port: 3000');
})