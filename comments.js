// Create web server

// Import modules
const express = require('express');
const router = express.Router();
const db = require('../models');
const Comment = db.Comment;
const User = db.User;
const Restaurant = db.Restaurant;

// Create comment
router.post('/', (req, res) => {
  const userId = req.user.id;
  const { text, restaurantId } = req.body;
  return Comment.create({
    text,
    UserId: userId,
    RestaurantId: restaurantId
  }).then(() => {
    return res.redirect(`/restaurants/${restaurantId}`);
  });
});

// Delete comment
router.delete('/:id', (req, res) => {
  const commentId = req.params.id;
  const userId = req.user.id;
  return Comment.findByPk(commentId).then(comment => {
    if (comment.UserId === userId) {
      return comment.destroy().then(comment => {
        return res.redirect(`/restaurants/${comment.RestaurantId}`);
      });
    } else {
      return res.redirect(`/restaurants/${comment.RestaurantId}`);
    }
  });
});

module.exports = router;