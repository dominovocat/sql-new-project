const User = require("../models/user");

module.exports.createUser = async (data) => {
  const newUser = await User.create(data);

  return newUser;
}

module.exports.getUserList = async (limit, page) => {
  const foundUsers = await User.findAll({
    limit: limit,
    offset: (page - 1) * limit,
  });

  return foundUsers;
}
module.exports.getUserById = async (userId) => {


  const user = await User.findByPk(userId);
  return user;
}

module.exports.updateUserById = async (id,data)=>{
  await User.update(data,{
    where:{
      id:id,
    },
  });
  const updateUser = await User.findByPk(id);
  return updateUser;
};

module.exports.deleteUserById = async (id)=>{


  const deleteUser = await User.findByPk(id);
  if(!deletedUser){
    throw new Error('User not found');
  }
  await deleteUser.destroy();
  return deleteUser;

};