const express = require("express");
const path = require("path");

const app = express();

app.get("/*", (req, res) => {
    res.sendFile(path.resolve("frontend", "index.html")); /* any path will route back to handler.  All lead back to index */
});

app.listen(process.env.PORT || 5060, () => console.log("Server running..."));
