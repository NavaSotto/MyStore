const StoreController = require("../../DL/Controllers/StoreController");

async function read(reqDetails) {
  const result = StoreController.read(reqDetails);
  return result;
}
//=====================================================================
async function readOne(id) {

  const result = await StoreController.readOne(id);
  console.log(result);
  const filterResult = (({ id,
    type,
    collections,
    comments,
    downloads,
    likes,
    views,
    tags }) => ({
      id,
      type,
      collections,
      comments,
      downloads,
      likes,
      views,
      tags
    }))(result);

  return filterResult;
}
//=====================================================================
async function update(id, data) {
}
//=====================================================================
async function del(id, token) {
}
//=====================================================================


module.exports = {
  ...StoreController,
  read,
  readOne,
  update,
  del
};
