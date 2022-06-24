const User = require("../models/user");

class UserService {
  createUser = async (data) => {
    const newUser = await User.create(data);

    return newUser;
  };

  getUserList = async (limit, page) => {
    const foundUsers = await User.findAll({
      limit: limit,
      offset: (page - 1) * limit,
    });

    return foundUsers;
  };
  getUserById = async (userId) => {
    const user = await User.findByPk(userId);
    return user;
  };

  updateUserById = async (id, data) => {
    await User.update(data, {
      where: {
        id: id,
      },
    });
    const updateUser = await User.findByPk(id);
    return updateUser;
  };

  deleteUserById = async (id) => {
    const deleteUser = await User.findByPk(id);
    if (!deletedUser) {
      throw new Error("User not found");
    }
    await deleteUser.destroy();
    return deleteUser;
  };
}

module.exports = UserService();