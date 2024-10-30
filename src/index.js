const express = require('express');
const app = express();
const path = require('path');

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({extented: true}));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(require('./routes'));

app.listen(app.get('port'), function(){
    console.log(`app live in http://localhost:${app.get('port')}`);
})