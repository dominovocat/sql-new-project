const { QueryTypes } = require("sequelize");
// const client = require("../models");
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


  // const foundUsers = await User.findByPk(userId);
  // const foundUsers = await User.findOne;
  
  // const qInt = client.getQueryInterface();

  // const foundUsers = await qInt.select(null,'users',{ where:{
  //   id:userId,
  // } });

  // const foundUsers  = await client.query(`
  //   SELECT * FROM "users" WHERE "id" = ${userId}
  // `,{type:QueryTypes.SELECT});


  // if (foundUsers.length === 0) {
  //   return null;
  // }


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
  // const deletedCount = await User.destroy({
  //   where:{
  //     id:id,
  //   }
  // });
  // if(deletedCount===0){
  //   throw new Error('User not found');
  // }
  // return true;

  const deleteUser = await User.findByPk(id);
  if(!deletedUser){
    throw new Error('User not found');
  }
  await deleteUser.destroy();
  return deleteUser;

};