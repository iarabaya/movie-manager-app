const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

app.set('port', PORT);

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.listen(app.get('port'), () => {
  console.log(`Server listening on ${PORT}`);
});