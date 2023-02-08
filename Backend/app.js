const express = require('express');
const app = express();
const mongoose = require('mongoose');
const router = require("./route/book-routes");
const cors =  require('cors');



app.use(express.json());
app.use(cors());

app.use("/books",router);//localhost:5000/books

mongoose.connect("mongodb+srv://Viraj:S2yYltHLyRFntqLj@cluster0.ckl7hpd.mongodb.net/BookStore?retryWrites=true&w=majority"
).then(() => console.log("Database Connected")).then(() => {
    app.listen(5000)
}).catch((err) => console.log("DB Connect Error"));

