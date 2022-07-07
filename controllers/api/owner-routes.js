const router = require('express').Router();
const { Owner, Vet, Tech } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
    // find all categories
    // be sure to include its associated Products
    Owner.findAll({
        // attributes: { exclude: ['password'] },
        include: [
            {
                model: Tech,
                attributes: ['id', 'tech_name']
            },
            {
                model: Vet,
                attributes: ['id', 'vet_name']
            },
        ]
    })
        .then(dbOwnerData => res.json(dbOwnerData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/:id', (req, res) => {
    // find one category by its `id` value
    // be sure to include its associated Products
    Owner.findOne({
        // attributes: { exclude: ['password'] },
        where: {
            id: req.params.id
        },
        include: [
            {
                model: Tech,
                attributes: ['id', 'tech_name', 'email', 'vet_id']
            },
            {
                model: Vet,
                attributes: ['id', 'vet_name']
            },
        ]
    })
        .then(dbOwnerData => {
            if (!dbOwnerData) {
                res.status(404).json({ message: 'No Owner found with this id' });
                return;
            }
            res.json(dbOwnerData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


router.post('/', (req, res) => {
    // create a new category
    Owner.create({
        owner_name: req.body.vet_name,
        email: req.body.email,
        phone_num: req.body.phone_num,
    })
        .then(dbOwnerData => res.json(dbOwnerData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.put('/:id', (req, res) => {
    // update a category by its `id` value
    Owner.update(req.body, {
        where: {
            id: req.params.id
        }
    })
        .then(dbOwnerData => {
            if (!dbOwnerData[0]) {
                res.status(404).json({ message: 'No Owner found with this id' });
                return;
            }
            res.json(dbOwnerData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.delete('/:id', (req, res) => {
    // delete a category by its `id` value
    Owner.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbOwnerData => {
            if (!dbOwnerData) {
                res.status(404).json({ message: 'No Owner found with this id' });
                return;
            }
            res.json(dbOwnerData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;