const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');
const Pics = require('./Pics');

Post.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

Post.hasMany(Comment, {
  foreignKey: 'postId',
  onDelete: 'CASCADE'
});

Post.hasMany(Pics, {
  foreignKey: 'picId',
  onDelete: 'CASCADE'
});

Pics.belongsTo(Post, {
  foreignKey: 'postId',
  onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

module.exports = {
  User,
  Comment,
  Post,
  Pics
};