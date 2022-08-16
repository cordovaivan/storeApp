const User = require('./user');
const Clothes = require('./clothes');

User.hasMany(Clothes, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Clothes.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Clothes };