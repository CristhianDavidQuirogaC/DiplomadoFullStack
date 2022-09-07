const express = require("express");
const productController= require("../controlers/productController");
const productRouter = express.Router(); //creo un router de expres para las rutas de los productos

//Routes
/*app.get("/api/v1/products", getAllProducts);
app.post("/api/v1/products", addProducts);
app.get("/api/v1/products/:id/", getProductsById );*/
productRouter.route("/")
.get(productController.getAllProducts).post(productController.addProducts);
//productRouter.post("/", addProducts);
productRouter.route("/:id").get (productController.getProductsById);
productRouter.route("/:id").put(productController.editProductsById);
productRouter.route("/:id").delete(productController.deleteProductsById);

module.exports = productRouter;