const express = require("express");

const path = require("path");

const { checkTickets } = require("./monitor");

const app = express();

app.use(express.static("public"));

let latestStatus =
{
    soldOut: true,
    checkedAt: null
};

async function updateStatus()
{

    latestStatus = await checkTickets();

}

updateStatus();

setInterval(updateStatus, 10000);

app.get("/", (req, res) =>
{
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/status", (req, res) =>
{
    res.json(latestStatus);
});

app.listen(3000, () =>
{

    console.log("Server kjører på http://localhost:3000");

});