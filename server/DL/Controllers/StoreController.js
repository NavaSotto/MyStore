const axios = require("axios");
const appReq = require("../../baseUrlReq");

//=====================================================================

async function create(data, token) {

}
//=====================================================================
function sortResultsById(arr) {
  console.log(arr.sort((a, b) => a.id - b.id));
  return arr.sort((a, b) => a.id - b.id);
}
//=====================================================================
async function read(reqDetails) {
  const { category, page, per_page, order, sortById } = reqDetails;
  console.log(order);
  return await axios.get(`${appReq.baseUrl} +https://pixabay.com/api/?key=25540812-faf2b76d586c1787d2dd02736&q=${category}&page=${page}&per_page=${per_page}&order=${order}&pretty=true`)
    .then(res => {
      const totalHits = parseInt(res.data.totalHits);
      var currentPageImgArr = res.data.hits.map(({ id, webformatURL }) => ({ "id": id, "src": webformatURL }));
      if (sortById)
        currentPageImgArr = sortResultsById(currentPageImgArr);
      const result = { "totalHits": totalHits, "currentPageImgArr": currentPageImgArr };
      return result;
    })
    .catch(error => {

      console.log(error);
    });
}
//=====================================================================

async function readOne(id) {
  console.log("in readone in store controller " + id);
  return await axios.get(`${appReq.baseUrl} + https://pixabay.com/api/?key=25540812-faf2b76d586c1787d2dd02736&id=${id}`)
    .then(res => {
      const result = res.data.hits[0];
      return result;
    })
    .catch(error => {
      console.log(error);
    });
}
//=====================================================================

async function update(idEx, data, token) {

}
//=====================================================================
async function del(_id, token) {

}
//=====================================================================

module.exports = {
  create,
  read,
  readOne,
  update,
  delete: del,
};
