const { Comment } = require('../models');

const commentData = [
    {
        comment_text: 'biting', tech_id: 1, pet_id: 1,
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;