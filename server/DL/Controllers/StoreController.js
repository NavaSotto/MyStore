const axios = require("axios");
//for deploy -change requests
//const baseURL = require( "../../baseUrlReq");
//const port = process.env.PORT || '8080';
//const baseURL = 'https://my-store2022.herokuapp.com:' + port;

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
<<<<<<< HEAD
=======
  console.log(baseURL);
>>>>>>> 6e369c2d1b4d72debd04033deeb6309212871fcb

  const { category, page, per_page, order, sortById } = reqDetails;
  return await axios.get(`https://pixabay.com/api/?key=25540812-faf2b76d586c1787d2dd02736&q=${category}&page=${page}&per_page=${per_page}&order=${order}&pretty=true`)
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
  return await axios.get(`https://pixabay.com/api/?key=25540812-faf2b76d586c1787d2dd02736&id=${id}`)
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
