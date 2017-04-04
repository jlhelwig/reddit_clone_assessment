var express = require("express");
	router = express.Router();
	knex = require("../db/knex")

router.route('/')
.post(function(req,res){
  knex('users')
  console.log('this is home route');
})

router.route('/')
	.post((req, res) => {
		knex('users')
			.insert({
				full_name: req.body.user.full_name,
				username: req.body.user.username,
				img_url: req.body.user.img_url
			})
			.returning('id')
			.then((id) => {
				res.redirect(`/users/${id}`);
			});
	})
	.get((req, res) => {
	  knex('users')
	    .select('id', 'username')
			.orderBy('id', 'asc')
	    .then((users) => {
				// render the view engine template w/ users passed in
	      res.render('users/index', {
					// the users key & value are the same so this is {users: users}
	        users
	      });
			});
	});















module.exports = router;
