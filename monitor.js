const cheerio = require("cheerio");

async function checkTickets()
{

    try {

        const url = "https://fanparks.fanparks.com/booking/fotballfesten-ullevaal-2026";

        const response = await fetch(url);

        const html = await response.text();

        const $ = cheerio.load(html);

        const soldOut = $(".ticket-info.sold_out").length > 0;

        return {
            soldOut,
            checkedAt: new Date()
        };

    }
    catch (error) {

        console.error(error);

        return {
            soldOut: true,
            checkedAt: new Date()
        };

    }

}

module.exports =
{
    checkTickets
};