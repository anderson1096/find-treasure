const express = require('express');
const path = require('path');
const app = express();


//Config
app.set('port', process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Server
app.listen(app.get('port'), () => {
   console.log(`Listening on port ${app.get('port')}`);
});


app.get('/', (req, res) => {
   res.render('index');   
});
