var express = require("express");
	router = express.Router();
	knex = require("../db/knex")


router.route('/')
	.post(function(req, res) {
		knex('users')
			.insert({
				full_name: req.body.user.full_name,
				username: req.body.user.username,
				img_url: req.body.user.img_url
			})
			.returning('id')
			.then(function(id) {
				res.redirect(`/users/${id}`);
			});
	})
	.get(function(req, res){
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


// this is where users will go to add a new user
router.route("/new")
	.get((req, res) => {
	  res.render('users/new');
	});

// this handles a specific id route

  router.route('/:id/edit')
  	.get(function(req, res) {
  	  knex('users')
  	    .select('id', 'username', 'full_name', 'img_url')
  	    .where({ id: req.params.id })
        .first()
  	    .then(function(user){
  	      res.render('users/edit', {
  	        user
  	      });
  	    });
  	});


  router.route("/:id")
  	.get(function(req, res) {
  	  knex('users')
  	    .select('id', 'username', 'full_name', 'img_url')
  	    .where({ id: req.params.id })
  	    .first()
  	    .then(function(user) {
  				// this passes the user to the ejs template
  	      res.render('users/show', {
  	        user
  	      });
  	    });
  	})
  	.put(function(req, res) {
  	  knex('users')
  	    .update({
  	      full_name: req.body.user.full_name,
  	      username: req.body.user.username,
  	      img_url: req.body.user.img_url
  	    })
  	    .where({
  	      id: req.params.id
  	    })
  	    .then(function() {
  	      res.redirect(`/users/${req.params.id}`);
  	    })
  	})

// router.route('/:id')
.delete(function(req, res) {
  knex('users')
  .first()
  .where({
    id: req.params.id
  })
  .del()
  .then(function() {
    res.redirect('/users');
  });
})
router.route('/:id/delete')
.get(function(req,res){
  knex('users')
  .select('id','username')
  .where({
    id: req.params.id
  })
  .first()
  .then(function(user){
    res.render('users/delete', {
      user
      // console.log(user);
    });
  });
})










module.exports = router;
