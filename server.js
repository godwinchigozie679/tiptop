const express = require('express');
const nodemailer = require('nodemailer');
const { reset } = require('nodemon');
const app = express();



const PORT = process.env.PORT || 3000


app.use(express.static('public'));
app.use(express.json());


app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/public/quote.html')
})

app.post('/', (req, res)=>{
    console.log(req.body);

    const output = `
            <p>You have a new client request</p>
            <h3>The details of your client are:</h3>
            <ul>
            <li>Email: ${req.body.email}</li>
            <li>Confirm Email: ${req.body.email}</li>
            <li>First Name: ${req.body.firstName}</li>
            <li>Last Name: ${req.body.lastName}</li>
            <li>Phone Number: ${req.body.phone}</li>
            <li>Number of words: ${req.body.numberOfWords}</li>
            <li>Number of page: ${req.body.numberOfPages}</li>
            <li>Manuscript Type: ${req.body.manuscriptType}</li>
            <li>Best Time: ${req.body.bestTime}</li>           
                      
            </ul>  
            <h2>Message:</h2> 
            <p>${req.body.message}</p> `;

            var transporter = nodemailer.createTransport({
                host: 'smtp.tiptopeditorials.com',
                port: 25,
                secure: false,
                // service: 'gmail',
                auth: {
                    user: 'webmail@tiptopeditorials.com',
                    pass: 'nnanna25'
                },
                tls: {
                    rejectUnauthorized: false,
                    minVersion: 'TLSv1'
                  },
        
            })


    var mailOptions = {
                from: '"New Client Contact" <webmail@tiptopeditorials.com>',
                to: 'igwechioma29@gmail.com, webmail@tiptopeditorials.com',
                subject: 'New Client Request',   
                text: '',
                html: output                              
                
                        
                    }

    transporter.sendMail(mailOptions,(error,info)=>{
                                if(error){
                                    console.log(error);
                                    res.send('error');
                                } else{
                                    console.log('Email sent: ' + info.response);
                                    res.send('success');
                                }
                            });                           
                           
});



app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})