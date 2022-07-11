const { Comment } = require('../models');

const commentData = [
    {
        comment_text: 'biting', pet_id: 1,
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;