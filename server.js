require('dotenv').config();//configuration dotenv
const express = require('express');//Import Express.js
const bodyParser = require('body-parser');//Import bodyparser body parser
const nodemailer = require('nodemailer');//Import nodemailer for email services
const path = require('path');//Import path modules


const app = express();
const PORT = process.env.PORT;


const username=process.env.EMAIL_USER;
const userpass=process.env.EMAIL_PASS;

// MiddelWare
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));

//Nodemailer Configuration
const transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:username,
        pass:userpass
    }
});

//Handel Form Submission
app.post('/submit-form',(req,res)=>{
    const {firstName,  email, subject,message} =
    req.body;
    
    const mailOptions = {
        from: username,
        to:username,
        subject:`New Contact Form Submission from ${firstName} `,
        text:`You have a new contact form submission:
        -Name:${firstName} 
        -Subject:${subject}
        -Email:${email}
        -Message:${message}`,
    };
    
    transporter.sendMail(mailOptions,(error,info)=>{
        if(error){
            console.error('Error sending email:',error);
            return res.status(500).send('An error occured while sending the email. Please try again later.');
        }
        console.log('Email sent:',info.response);
        res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Form response</title>
    <style>
    body{
    margin:0;
    padding:0;
    background-color:#f4f4f9;
    color:#333;
    text-align:center;
    }
    h1{
    color:black;}
    p{
    color:black;
    font-size:19px;
    font-weight:bold;
    }
    a{
    text-decoration:none;
    color:black;
    }
    </style>

    </head>
    <body>
      <h1>Thank you. ${firstName} !</h1>
            <p>We have recieved your message and will get back to you shortly.</p>
            <a href="/">◀️Go Back to Contact form</a>
    </body>
    </html>




`);
        });
});

app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
});