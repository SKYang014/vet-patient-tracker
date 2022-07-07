const router = require('express').Router();
const vetRoutes = require('./vet-routes');
const techRoutes = require('./tech-routes');
const ownerRoutes = require('./owner-routes');
// const petRoutes = require('./pet-routes');

router.use('/vets', vetRoutes);
router.use('/techs', techRoutes);
router.use('/owners', ownerRoutes);
// router.use('/pets', petRoutes);

module.exports = router;