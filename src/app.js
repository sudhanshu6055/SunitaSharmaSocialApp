const express = require('express')
require("./db/conn");
const Submit = require("./models/submit");

const path = require("path");
const hbs = require("hbs");
const app = express();
// public static path
const static_path=path.join(__dirname,"../public");
const template_path=path.join(__dirname,"../templates/views");
const partials_path=path.join(__dirname,"../templates/partials");

app.set('view engine','hbs');
app.set('views',template_path);

hbs.registerPartials(partials_path);
app.use(express.static(static_path));

app.use(express.urlencoded({extended:false}));
app.use(express.json());


app.get('', (req, res)=>{
    res.render("index")
  }),

  app.get('/Personalized-Fitness-Plans', (req, res)=> {
    res.render("Personalized-Fitness-Plans")
  }),
  
  app.get('/Activity-Tracker', (req, res)=> {
    res.render("Activity-Tracker")
  }),

  app.get('/Mental-Well-Support', (req, res)=> {
    res.render("Mental-Well-Support")
  }),
  
  app.get('/Emergency', (req, res)=> {
    res.render("Emergency")
  }),

  app.get('/Contact-Us', (req, res)=> {
    res.render("Contact-Us")
  }),
 
 

  // database

  app.post('/Contact-Us', async(req, res)=> {
    try {
      // console.log(req.body.fname);
const appEmployee = new Submit({
  fname : req.body.fname,
  lname : req.body.lname,
  email: req.body.email,
  comment:req.body.comment,
})
      const pari = await appEmployee.save();
      res.status(201).render(index);
    } catch (error) {
      res.status(400).send(error);
    }
  }),
 
app.listen(3000)