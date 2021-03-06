const createHttpError = require("http-errors");
const { Products } = require("../db/models");
const { findSingleCategory } = require("./category.service");

class ProductService {
  createProduct = async (data) => {
    const foundCat = await findSingleCategory({ name: data.category });

    if (!foundCat) {
      throw createHttpError(404, 'Category not found');
    }

    const newProduct = await Products.create(data);

    return newProduct;
  };

  findProductList = async (limit, page) => {
    const foundProducts = await Products.findAll({
      limit: limit,
      offset: (page - 1) * limit,
    });

    return foundProducts;
  };

  findProductById = async (catId) => {
    const product = await Products.findByPk(catId);

    if (!product) {
      throw createHttpError(404, "Product not found");
    }

    return product;
  };

  findSingleProduct = async (whereCriteria) => {
    const product = await Products.findOne({ where: whereCriteria });

    if (!product) {
      throw createHttpError(404, "Product not found");
    }

    return product;
  };

  updateProductById = async (id, data) => {
    const [count] = await Products.update(data, {
      where: {
        id,
      },
    });
    if (count === 0) {
      throw createHttpError(404, "Product not found");
    }

    const updatedProduct = await this.findProductById(id);

    return updatedProduct;
  };

  deleteProductById = async (id) => {
    const deletedProduct = await this.findProductById(id);
    if (!deletedProduct) {
      throw createHttpError(404, "Product not found");
    }

    await Category.destroy({ where: { id } });

    return deletedProduct;
  };
}

module.exports = new ProductService();