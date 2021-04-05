import express from "express";

const app = express();
const port:string = process.env.PORT || "8080";

app.use(express.static("dist"));

app.listen(port, () => {
    console.log(`Server started @${port}`)
});