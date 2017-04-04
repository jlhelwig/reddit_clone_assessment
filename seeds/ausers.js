

exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('users').del(),

    // Inserts seed entries
    knex('users').insert({username: 'jeff_h', full_name: 'jeffhelwig', img_url: 'cute.jpg'}),
    knex('users').insert({username: 'eileenQ', full_name: 'eileenhelwig', img_url: 'cuter.jpg'}),
    knex('users').insert({username: 'henryH', full_name: 'henryHelwig', img_url: 'goofy.jpg'})
  );
};
