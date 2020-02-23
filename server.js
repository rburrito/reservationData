const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const reservationsRouter = require('./routes/reservations');
const bodyParser=require('body-parser');
const helmet=require('helmet');

// serve the homepage from here
app.use(express.static('public'));

// only allows our own scripts to be executed
app.use(helmet.contentSecurityPolicy({
  directives:{
    defaultSrc:["'self'"],
    styleSrc:["'self'"]
  }
}));

// blocks reflected XSS
app.use(helmet.xssFilter());

// sets X-Content-Type options to No Sniff to prevent browser from sniffing MIME for files with misleading extensions and malicious code
app.use(helmet.noSniff());

// prevents browser from using cached versions of code that may be more vulnerable
app.use(helmet.noCache());

// prevents clickjacking by preventing frames
app.use(helmet.frameguard({action:'deny'}));

app.use(bodyParser.urlencoded({ extended:false }));

app.use(bodyParser.json());
app.use('/reservations', reservationsRouter);

app.listen(port, () => {
  console.log(`Server app listening on port ${port}!`);
});
