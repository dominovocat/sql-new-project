const { Router } = require("express");
const categRouter = require("./category.router");
const prodRouter = require("./product.router");
const userRouter = require("./user.router");
const orderRouter = require("./order.router")

// path /api
const router = Router();

// path /api/users
router.use('/users', userRouter);

// path /api/categories
router.use('/categories', categRouter);

// path /api/products
router.use('/products', prodRouter);

//path /api/orders
router.use('/orders', orderRouter)

module.exports = router;