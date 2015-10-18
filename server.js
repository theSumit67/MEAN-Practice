var express = require('express'),
    app = express(),
    path = require('path'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');


/*  DB */
mongoose.connect('mongodb://localhost:27017/test');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback() {
    console.log('Conntected To Mongo Database');
});
//Schema ->  new Schema - model - work on model
var Schema = mongoose.Schema;
var userSchema = new Schema({
    name: String,
    address: String
});
var User = mongoose.model('User', userSchema);
var ObjectId = require('mongoose').Types.ObjectId; 


/* configs */
app.use(express.static(__dirname + '/'));
//app.use(express.static(path.join(__dirname, '/../')));
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


/* routes */
app.get('/api/users', function(req, res) {
    User.find({}, function(err, users) {
        if (err) throw err;
        res.send(users);
    });
});

app.post('/api/users', function(req, res, next) {
    var _name = req.body.name;
    var _address = req.body.address;
    if ( _name && _address ){
	    var _insert = new User({ name: _name, address: _address });

	    _insert.save( function(err) {
	        if (err) throw err;
	        console.log('User saved successfully! ....Redirecting');
	    });
	    res.redirect('/#crud');
    }
    else{
    	res.redirect('/#crud');	
    }

});

app.get('/api/users/delete', function (req, res, next) {
/* (req.params) Checks route params, ex: /user/:id
   (req.query) Checks query string params, ex: ?id=12 Checks urlencoded body params and
    do not use query string in routes Express explicitly states 
    "QUERY STRINGS ARE NOT CONSIDERED WHEN PERFORMING THESE MATCHES"
	
    */
    //db.test.find({"_id" : ObjectId("4ecc05e55dd98a436ddcc47c")})
    var _param = req.query.id;
    var _id = { "_id" : new ObjectId(_param) }
    var resStr;
	if( _id ){
		User.find( _id , function( err, data) {
        	if (err) throw err;
			resStr = data.name + ' has been deleted ..... ';
			console.log(_id._id + ' - ' +  ' - ' + data);
			//remove
			User.remove(_id, function (err) {
				if(!err)
					res.send( resStr );
			});	
		});
			
		//console.log(_success + '--after remove'); // 1 excuted coz of nonblocking IO
	};
});




var server = app.listen(3000, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log(__dirname + '   -  app listening at http://%s:%s', host, port);
});
