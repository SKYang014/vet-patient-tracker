const router = require('express').Router();
const { Vet, Tech } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
    // find all categories
    // be sure to include its associated Products
    Vet.findAll({
        attributes: { exclude: ['password'] },
        include: [
            {
                model: Tech,
                attributes: ['id', 'tech_name']
            },
        ]
    })
        .then(dbVetData => res.json(dbVetData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/:id', (req, res) => {
    // find one category by its `id` value
    // be sure to include its associated Products
    Vet.findOne({
        attributes: { exclude: ['password'] },
        where: {
            id: req.params.id
        },
        include: [
            {
                model: Tech,
                attributes: ['id', 'tech_name', 'email', 'vet_id']
            },
        ]
    })
        .then(dbVetData => {
            if (!dbVetData) {
                res.status(404).json({ message: 'No Vet found with this id' });
                return;
            }
            res.json(dbVetData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


router.post('/', (req, res) => {
    // create a new category
    Vet.create({
        vet_name: req.body.vet_name,
        email: req.body.email,
        password: req.body.password
    })
        .then(dbVetData => res.json(dbVetData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post('/login', (req, res) => {
    // expects {email: 'lernantino@gmail.com', password: 'password1234'}
    Vet.findOne({
        where: {
            email: req.body.email
        }
    }).then(dbVetData => {
        if (!dbVetData) {
            res.status(400).json({ message: 'No user with that email address!' });
            return;
        }

        //res.json({ user: dbVetData });

        // Verify user
        const validPassword = dbVetData.checkPassword(req.body.password);
        //Note that the instance method was called on the user 
        //retrieved from the database, dbVetData. Because the 
        //instance method returns a Boolean, we can use it in a 
        //conditional statement to verify whether the user has been 
        //verified or not.
        if (!validPassword) {
            res.status(400).json({ message: 'Incorrect password!' });
            return;
        }

        res.json({ user: dbVetData, message: 'You are now logged in!' });
    });
});

router.put('/:id', (req, res) => {
    // update a category by its `id` value
    Vet.update(req.body, {
        individualHooks: true,
        where: {
            id: req.params.id
        }
    })
        .then(dbVetData => {
            if (!dbVetData[0]) {
                res.status(404).json({ message: 'No Vet found with this id' });
                return;
            }
            res.json(dbVetData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.delete('/:id', (req, res) => {
    // delete a category by its `id` value
    Vet.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbVetData => {
            if (!dbVetData) {
                res.status(404).json({ message: 'No Vet found with this id' });
                return;
            }
            res.json(dbVetData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;