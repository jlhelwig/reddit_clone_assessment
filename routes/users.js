var express = require("express");
	router = express.Router();
	knex = require("../db/knex")

router.route('/')
.post(function(req,res){
  knex('users')
  console.log('this is home route');
})

router.route('/')
	.post(function(req, res){
		knex('users')
			.insert({
				full_name: req.body.user.full_name,
				username: req.body.user.username,
				img_url: req.body.user.img_url
			})
			.returning('id')
			.then(function(id){
				res.redirect(`/users/${id}`);
			});
	})
	.get(function(req, res) {
	  knex('users')
	    .select('id', 'username')
			.orderBy('id', 'asc')
	    .then(function(users) {
				// render the view engine template w/ users passed in
	      res.render('users/index', {
					// the users key & value are the same so this is {users: users}
	        users
	      });
			});
	});
router.route('/new')
    .get((req, res) => {
        res.render('users/new');
    });













module.exports = router;
