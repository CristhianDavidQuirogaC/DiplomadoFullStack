const fs = require('fs');
const { features } = require('process');
// Handlers a lo de abajo se les llama Handlers
//console.log(products);
exports.getAllProducts = (req, res) => {
    const products = JSON.parse(fs.readFileSync(`${__dirname}/../data/products.json`));
  
  //console.log(req.requestTime);
    res.status(200).json({
      status:"success",
      timeOfRequest: req.requestTime,
      results: products.length,
      data:{
        products: products,
      },
    });
  };
  
  exports.addProducts = (req, res) => {
    const products = JSON.parse(fs.readFileSync(`${__dirname}/../data/products.json`));
    products.push(req.body);
    fs.writeFileSync(`${__dirname}/../data/products.json`, JSON.stringify(products));
    /*res.status(200).json({
      status:"Enviado con exito",});*/
    res.status(200).json({
      status:"success Producto añadido",
      results: products.length,
      data:{
        products,
      },
    });
  }
  exports.getProductsById = (req, res) => {
    const products = JSON.parse(fs.readFileSync(`${__dirname}/../data/products.json`));
    const foundProduct = products.filter((p)=>p.id == req.params.id);
    console.log(req.params);
    if(foundProduct){
     res.status(200).json({
        status:"success",
        results: products.length,
        data:{
          products: foundProduct,
        }
      })
    }
    else{
      res.status(404).json({
        status:"not found",
      });
    };
  };
  exports.editProductsById =  (req, res) => {
    const products = JSON.parse(fs.readFileSync(`${__dirname}/../data/products.json`));
    const ProductoAEditar = products.find((p)=>p.id == req.params.id);
    const foundProduct = products.findIndex((p)=>p.id == req.params.id)
    if (ProductoAEditar){    
      products.splice(foundProduct,1,{ 
        id: req.body.id,
        name: req.body.name,
        price: req.body.price,
        categoria: req.body.categoria,
      })
    fs.writeFileSync(`${__dirname}/../data/products.json`, JSON.stringify(products));
    res.json({
      status :"Se ha hecho cambios al producto:",
      data:{
        products: ProductoAEditar,
      }
    })
      
    }else{
      res.status(404).json({
        status: "Not Found",
      });
    }
  }

  exports.deleteProductsById = (req, res) => {
    const products = JSON.parse(fs.readFileSync(`${__dirname}/../data/products.json`));
    const ProductoAEliminar = products.find((p) => p.id == req.params.id);
    const foundProduct = products.findIndex((p) => p.id == req.params.id);
    if(foundProduct!=-1){
      products.splice(foundProduct,1)
      fs.writeFileSync(`${__dirname}/../data/products.json`, JSON.stringify(products));
      res.status(200).json({
        status:"Se ha eliminado al siguiente a producto:",
        data:{
          products: ProductoAEliminar
        }
      })
    }
    else{
      res.status(404).json({
        status:"not encontrado",
      });
    };
  };