const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const port = 8000;
const app = express();

const db = require('./config/mongoose');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.urlencoded({ extended: false })); //this is a middleware i.e. it is before the controller
app.use(express.static('assets'));
//Trying custom middleware
// app.use(function (req, res, next) {
//     console.log('Middleware1 called');
//     next();
// })
var contactList = [
    {
        name: "Girik",
        phone: "1234567890"
    },
    {
        name: "Nikhil",
        phone: "9876543210"
    }
]

app.get('/', function (req, res) { // '/' is the URL I am hitting, second function is actually the callback function,and req is for request and res is for response
    return res.render('home', {
        title: "Contacts list",
        contact_list: contactList
    });
});

//for the form data that is entered through the form
app.post('/create-contact', function (req, res) {
    // return res.redirect("/practice");
    // console.log(req.body);
    contactList.push({
        name: req.body.name,
        phone: req.body.phone
    });
    return res.redirect('/');
});
app.get('/delete-contact/', function (req, res) {
    console.log(req.query);
    let phone = req.query.phone;
    let contactIndex = contactList.findIndex(contact => contact.phone == phone);
    if (contactIndex != -1) {
        contactList.splice(contactIndex, 1);
    }
    return res.redirect('back');
});
app.get('/practice', function (req, res) {
    return res.render('practice', { title: "Hello" });
});

app.listen(port, function (err) {
    if (err) {
        console.log('Error in running the server', err);
    }
    else {
        console.log('Server running successfully!');
    }
});

