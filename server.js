const { Prisma } = require('@prisma/client');
const express = require('express');
const {PrismaClient} = require('@prisma/client');

const app = express();
const prisma = new PrismaClient();

const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.get('/user',async(req, res) => {
    const data = await prisma.user.findMany();
    res.json({
        message: 'ok',
        data
    });
});

app.post('/user',async(req, res) => {
    console.log(req);
    const response = await prisma.user.create(req.body);
    res.json({
        message: 'add data sucessfuly'
    });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});