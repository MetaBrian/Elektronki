const express = require("express");
const cors = require("cors");
const app = express();
// import Card from "./cardModel";
// import createCard from "./CreateCards";
const cardController = require("./cardController");

app.use(cors());
app.use(express.json());

app.get("/message", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.post('/newCard', cardController.createCard, (req, res, next) =>{
  cardController.createCard()
})


app.use((err, req, res, next) => {
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 400,
      message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
  });

app.listen(8080, () => {
  console.log(`Server is running on port 8080.`);
});