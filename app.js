const { checkTickets } = require("./monitor");

async function loop()
{

    await checkTickets();

    setTimeout(loop, 10000);

}

async function start()
{

    console.log("Starter Ticket Monitor...");

    await loop();

}

start();

// https://fanparks.fanparks.com/booking/fotballfesten-ullevaal-2026?_gl=1*pp4ev2*_ga*MTcxMzU0OTUxNS4xNzgyODQ2MzUz*_ga_XLBLGWQL41*czE3ODI5MDU3MDEkbzIkZzEkdDE3ODI5MDU3MDQkajU3JGwwJGgw