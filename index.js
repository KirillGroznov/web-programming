const express =require('express');
const app = express();
const fs = require('fs');
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));

app.get('/login', function (req,res) {
    res.sendFile(__dirname+'/public/authorization.html');
});

app.post('/login',function (req, res) {
    if (!req.body) console.log('Error');
    else {
        fs.readFile(__dirname+"/users.txt", 'utf8', function(err,data) {
            if (err) console.log('Error')
            else {
                let response;
                if (data.indexOf(req.body.login) >= 0 && data.indexOf(req.body.login) + req.body.login.length + 1 == data.indexOf(req.body.pass)) {
                    response = 'I am already know you. Welcome, ' + req.body.login;
                }
                else if (data.indexOf(req.body.login) >= 0 && data.indexOf(req.body.login) + req.body.login.length + 1 != data.indexOf(req.body.pass)) {
                    response='Wrong password';
                }
                else {
                    response = 'Hello, it looks like you are new user. Welcome, ' + req.body.login;
                    fs.appendFile(__dirname + '/users.txt', req.body.login + ' ' + req.body.pass + '\n', function (error) {
                        if (error) console.log('Error');
                    });
                }
                res.send(response);
            }
        });
    }
});
app.get('/admin',function (req,res) {
    if (req.headers.secret == 'I know the secret') fs.readFile(__dirname+"/users.txt", 'utf8', function(err,data) {
        if (err) console.log('Error')
        else res.send(data);
    });
    else res.send('Error');
});

app.listen(3000);