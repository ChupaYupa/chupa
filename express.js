const express = require('express'); //require или import
const nodemailer = require("nodemailer"); //import nodemailer
const cors = require('cors');





const app = express();


app.use(cors())
let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "docsperj@gmail.com", // generated ethereal user
        pass: "Ayrxhs8e" // generated ethereal password
    }
});



app.post('/', function (req, res) {
    res.send('Hello World!');
});
//create andpoint
app.post('/submit', async function (req, res) {



    let info = await transporter.sendMail({
        from: 'Toma', // sender address
        to: "docsperj@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        // text: "Test gmail", // plain text body
        html: "<b>Test gmail</b>" // html body
    });

    res.send('Submited!');
});

app.listen(3010, function () {
    console.log('Example app listening on port 3000!');
});