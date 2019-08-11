var express =               require("express"),
    passport =              require("passport"),
    bodyParser =            require("body-parser"),
    localStrategy =         require("passport-local"),
    passportLocalMongoose = require("passport-local-mongoose"),
    User                  = require("./models/user")
    mongoose = require("mongoose");
    mongoose.connect("mongodb://localhost/userauth", {useNewUrlParser: true});

var app = express();
app.set('view engine', 'ejs');
app.use(passport.initialize());
app.use(passport.session());
app.use(require("express-session")({
    secret:"I love icecream",
    resave: false,
    saveUninitialized: false,
}));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.get('/', function(req,res){
    res.render("home")
});

app.get('/secret', function(req,res){
    res.render("secret");
});
    

app.listen(process.env.PORT || 3000, process.env.IP, function(){
    console.log("the server has started");
});

