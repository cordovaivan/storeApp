const router = require('express').Router();
const { Clothes, Cart } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
      const newItem = await Cart.create({
        ...req.body,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newItem);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
  router.delete('/:id', withAuth, async (req, res) => {
    try {
      const clothesData = await Clothes.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
      if (!clothesData) {
        res.status(404).json({ message: 'No clothes found with this id!' });
        return;
      }
  
      res.status(200).json(clothesData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  module.exports = router;