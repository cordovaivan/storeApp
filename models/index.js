const User = require('./user');
const Clothes = require('./clothes');
const Cart = require('./cart');

User.hasMany(Clothes, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Clothes.belongsTo(User, {
  foreignKey: 'user_id'
});

Cart.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Clothes, Cart };