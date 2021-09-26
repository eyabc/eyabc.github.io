
var users = [
  { id: 101, name: 'ID' },
  { id: 102, name: 'BJ' },
  { id: 103, name: 'PJ' },
  { id: 104, name: 'HA' },
  { id: 105, name: 'JE' },
  { id: 106, name: 'JI' }
];

var posts = [
  { id: 201, body: '내용1', user_id: 101 },
  { id: 202, body: '내용2', user_id: 102 },
  { id: 203, body: '내용3', user_id: 103 },
  { id: 204, body: '내용4', user_id: 102 },
  { id: 205, body: '내용5', user_id: 101 },
];

var comments = [
  { id: 301, body: '댓글1', user_id: 105, post_id: 201 },
  { id: 302, body: '댓글2', user_id: 104, post_id: 201 },
  { id: 303, body: '댓글3', user_id: 104, post_id: 202 },
  { id: 304, body: '댓글4', user_id: 105, post_id: 203 },
  { id: 305, body: '댓글5', user_id: 106, post_id: 203 },
  { id: 306, body: '댓글6', user_id: 106, post_id: 204 },
  { id: 307, body: '댓글7', user_id: 102, post_id: 205 },
  { id: 308, body: '댓글8', user_id: 103, post_id: 204 },
  { id: 309, body: '댓글9', user_id: 103, post_id: 202 },
  { id: 310, body: '댓글10', user_id: 105, post_id: 201 }
];

function posts_by(attr) {
  return _.where(posts, attr);
}

var comments_by_posts = _.pipe(
  _.pluck('id'),
  (post_ids) => _.filter(comments, (comment) => _.contains(post_ids, comment.post_id)),
);

var comments_to_user_names =
  _.map((comment) => _.find(users, (user) => user.id == comment.user_id).name);

_.go(
  { user_id: 101},
  posts_by,
  comments_by_posts,
  comments_to_user_names,
  _.count_by,
  console.log
);

const f1 = _.pipe(posts_by, comments_by_posts);
console.log(f1({ user_id: 101 }));


const f2 = _.pipe(
  f1,
  comments_to_user_names,
  _.uniq
);
console.log(f2({ user_id: 101 }));

const f3 = _.pipe(
  f1,
  comments_to_user_names,
  _.count_by
);
console.log(f3({ user_id: 101 }));


_.go(
  _.where(comments, { user_id: 105 }),
  _.pluck('post_id'),
  (post_ids) => _.filter(posts, (post) => _.contains(post_ids, post.id)),
  console.log
);

var users2 = _.index_by(users, 'id');
console.log(users2);


function find_user_by_id(user_id) {
  return users2[user_id];
}


var comments2 = _.go(
  comments,
  _.map(function(comment) {
      return _.extend({
        user: find_user_by_id(comment.user_id)
      }, comment);
    },
  ),
  _.group_by('post_id'),
)

var posts2 = _.map(posts, function(post) {
  return _.extend({
    comments: comments2[post.id],
    user: find_user_by_id(post.user_id)
  }, post);
})
var posts3 =  _.group_by(posts2, 'user_id');


console.log(posts2);

var user3 = _.map(users2, function(user) {
  return _.extend({
    posts: posts2[user.id]
  }, user);
});


