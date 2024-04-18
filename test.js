const rahad = require("./index");

async function test(url) {
    try {
        let result;
        if (url.includes("tiktok")) {
            result = await rahad.rahadtikdl(url);
        } else if (url.includes("facebook")) {
            result = await rahad.rahadfbdl(url);
        } else {
            throw new Error("Invalid URL");
        }
        return result;
    } catch (err) {
        throw err;
    }
}

test("https://vt.tiktok.com/ZSNvs6h6o/")
    .then(result => {
        console.log("Test TikTok Video OK");
        console.log(result);
    })
    .catch(err => {
        console.error(err);
    });

test("https://www.facebook.com/reel/192283630631784?mibextid=b1r3HaZxQ2aOKKJt")
    .then(result => {
        console.log("Test Facebook Video OK");
        console.log(result);
    })
    .catch(err => {
        console.error(err);
    });