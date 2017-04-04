# reddit_clone_assessment

Welcome, this is how we are going to set up a server today:

First, I will set up the git repo and download it such that there is a remote destination to push to. I will remember to update and push often.

First, we will set up the environment requiring in terminal the following: pg, bodyparser, knex, express, ejs, and morgan we will use the --save. Second we will set up our environment chai and mocha again with --save and in the development environment. Third we will initialize our knex and express. Third we will create a directory with files called server.js .gitignore .

Since we are working toward a mvp of full CRUD w/ users and views we will create our server.js file in our directory. We need to set up routes Folders, views folders including the static folder which will be our index screen.

Next we need to create our database. We can use knex to migrate the following tables: users, posts, and comments. This will create a time stamped file that we can edit to make columns and inter-relationships between the tables. Then we create our seed files with the least dependent files being loaded first with our most dependent files being loaded last, this is done alphabetically.

Our server file: First we need to set up our dependencies then our routes for the routes files. We will only start with users resource adding more as we progress. We also need a listener on 3000. We will turn on nodemon at this point to continuously rerun the node.

Routes: We will create our routes which will produce enable us to do full CRUD for each resource sending us to views in the ejs files. We will make the files in a restful way, so that it follows conventions.

When time comes we will create nested routes for each additional resource 'posts' and 'comments'.
