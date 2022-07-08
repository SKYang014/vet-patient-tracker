const router = require('express').Router();
const { Vet, Tech } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
    // find all categories
    // be sure to include its associated Products
    Tech.findAll({
        attributes: { exclude: ['password'] },
        include: [
            {
                model: Vet,
                attributes: ['id', 'vet_name']
            },
        ]
    })
        .then(dbTechData => res.json(dbTechData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/:id', (req, res) => {
    // find one category by its `id` value
    // be sure to include its associated Products
    Tech.findOne({
        attributes: { exclude: ['password'] },
        where: {
            id: req.params.id
        },
        include: [
            {
                model: Vet,
                attributes: ['id', 'vet_name', 'email']
            },
            // {
            //     model: Comment,
            //     attributes: ['id', 'comment_text', 'created_at'],
            //     include: {
            //         model: Pet,
            //         attributes: ['pet_name']
            //     }
            // },
        ]
    })
        .then(dbTechData => {
            if (!dbTechData) {
                res.status(404).json({ message: 'No tech found with this id' });
                return;
            }
            res.json(dbTechData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


router.post('/', (req, res) => {
    // create a new category
    Tech.create({
        tech_name: req.body.tech_name,
        email: req.body.email,
        password: req.body.password
    })
        .then(dbTechData => {
            req.session.save(() => {
                req.session.loggedIn = true;
                res.json(dbTechData);
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post('/login', (req, res) => {
    // expects {email: 'lernantino@gmail.com', password: 'password1234'}
    Tech.findOne({
        where: {
            email: req.body.email
        }
    }).then(dbTechData => {
        if (!dbTechData) {
            res.status(400).json({ message: 'No techs with that email address!' });
            return;
        }

        //res.json({ user: dbTechData });

        // Verify user
        const validPassword = dbTechData.checkPassword(req.body.password);
        //Note that the instance method was called on the user 
        //retrieved from the database, dbTechData. Because the 
        //instance method returns a Boolean, we can use it in a 
        //conditional statement to verify whether the user has been 
        //verified or not.
        if (!validPassword) {
            res.status(400).json({ message: 'Incorrect password!' });
            return;
        }

        req.session.save(() => {

            req.session.loggedIn = true;

            res.json({ dbTechData, message: 'You are now logged in!' });
        });
    });
});

router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    }
    else {
        res.status(404).end();
    }
});

router.put('/:id', (req, res) => {
    // update a category by its `id` value
    Tech.update(req.body, {
        individualHooks: true,
        where: {
            id: req.params.id
        }
    })
        .then(dbTechData => {
            if (!dbTechData[0]) {
                res.status(404).json({ message: 'No Tech found with this id' });
                return;
            }
            res.json(dbTechData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.delete('/:id', (req, res) => {
    // delete a category by its `id` value
    Tech.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbTechData => {
            if (!dbTechData) {
                res.status(404).json({ message: 'No Tech found with this id' });
                return;
            }
            res.json(dbTechData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;