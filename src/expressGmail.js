const express = require('express'); //require или import
const nodemailer = require("nodemailer"); //import nodemailer
const cors = require('cors');
const bodyParser = require('body-parser');





const app1 = express();
app1.use(bodyParser.urlencoded({ extended: false }));
app1.use(bodyParser.json());

app1.use(cors({
    origin: 'http://localhost:3001'
}))
let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.login, // generated ethereal user
        pass: process.env.password // generated ethereal password
    }
});



app1.post('/', function (req, res) {
    res.send('Hello World!');
});
//create andpoint
app1.post('/submit', async function (req, res) {
    let { name, email, message } = req.body;


    await transporter.sendMail({
        from: 'Toma', // sender address
        to: "docsperj@gmail.com", // list of receivers
        subject: "HR", // Subject line
        // text: "Test gmail", // plain text body
        html: `<b>HR message</b>

    <div>
    name: ${name}
    </div>
    <div>
    email:${email}
    </div>
    <div>
    message:${message}
    </div>`
    });

    res.send('Submited!');
});
const PORT = 'https://express-js2.herokuapp.com/'

app1.listen(PORT, function () {
    console.log('Example app listening on port http://localhost:3001!');
});