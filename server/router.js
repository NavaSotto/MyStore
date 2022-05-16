
StoreLogic = require("./BL/Logic/StoreLogic");
//views, downloads, collection etc
module.exports = (app) => {

  //CRUD

  //=====================================================================
  app.post("/store", async (req, res) => {
    try {
    } catch (err) {
    }
  });

  //=====================================================================

  app.get("/store/:category", async (req, res) => {

    const { category } = req.params;
    const { per_page, page, order, sortById } = req.query;
    const reqDetails = { "category": category, "page": page, "per_page": per_page, "order": order, "sortById": sortById };
    let result;
    try {
      result = await StoreLogic.read(reqDetails);
    } catch (error) {
      console.log("error in router");
      result = { status: 400, massage: error.message || error };
    }
    res.send(result);
  });
  //=====================================================================
  app.get("/store/:category/:id", async (req, res) => {
    console.log("in read one");
    const { id } = req.params;

    let result;
    try {
      result = await StoreLogic.readOne(id);
    } catch (error) {
      console.log("error in router");
      result = { status: 400, massage: error.message || error };
    }
    res.send(result);
  });
  //=====================================================================
  app.put("/store/edit/:id?", async (req, res) => {
    try {
    } catch (error) {
    }
    res.send(result);
  });
  //=====================================================================
  app.delete("/store/delete/:id", async (req, res) => {

    try {
    } catch (error) {
      result = { status: 400, massage: error.message || error };
    }
  });
};



