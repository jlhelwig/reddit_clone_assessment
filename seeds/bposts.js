

exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('posts').del(),

    // Inserts seed entries
    knex('posts').insert({user_id: 2, title: 'Hello World', content: 'whatever man'}),
    knex('posts').insert({user_id: 3, title: 'Hello Mars', content: 'whatever martian'}),
    knex('posts').insert({user_id: 1, title: 'Hello Der', content: 'hello hoover'})
  );
};
