const createHttpError = require("http-errors");
const { Order } = require("../db/models");
//const { findSingleCategory } = require("./category.service");

class Orderervice {
  createOrder = async (data) => {


    try{
    const newOrder = await Order.create(data);
    return newOrder;
  }catch(error){
    if(error.message.includes("Order_phones_ck")){
      throw createHttpError(
        400,
        "Phone number must be numeric and 11 digits length"
      );
    }
  }
};

  findOrderList = async (limit, page) => {
    const foundOrder = await Order.findAll({
      limit: limit,
      offset: (page - 1) * limit,
    });

    return foundOrder;
  };

  findOrderById = async (catId) => {
    const Order = await Order.findByPk(catId);

    if (!Order) {
      throw createHttpError(404, "Order not found");
    }

    return Order;
  };

  findSingleOrder = async (whereCriteria) => {
    const Order = await Order.findOne({ where: whereCriteria });

    if (!Order) {
      throw createHttpError(404, "Order not found");
    }

    return Order;
  };

  updateOrderById = async (id, data) => {
    const [count] = await Order.update(data, {
      where: {
        id,
      },
    });
    if (count === 0) {
      throw createHttpError(404, "Order not found");
    }

    const updatedOrder = await this.findOrderById(id);

    return updatedOrder;
  };

  deleteOrderById = async (id) => {
    const deletedOrder = await this.findOrderById(id);
    if (!deletedOrder) {
      throw createHttpError(404, "Order not found");
    }

    await Category.destroy({ where: { id } });

    return deletedOrder;
  };
}

module.exports = new Orderervice();