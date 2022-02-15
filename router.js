const MovieRouter = require('./views/MovieRouter');
const CategoryRouter = require('./views/CategoryRouter');
const router = require('express').Router();

//Rutas
router.use('/movies', MovieRouter);
router.use('/category', CategoryRouter);

module.exports = router;