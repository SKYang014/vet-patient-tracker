const { Comment } = require('../models');

const commentData = [
    {
        comment_text: 'Mild aggression but does well with treats', tech_id: 1, pet_id: 1,
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;