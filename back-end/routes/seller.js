const express = require("express");
const mainRouter = express.Router();
const {getUserURL,
  getCurrentMonthlySales,
  totalNumberOfItemsAvailable,
  totalNumberOfItemsSold,
  sellerRating,
  getAllMyProducts,
  updateProduct,
  hideProduct,
  showProduct,
  addProduct,
  salesHistory} = require("../controllers/seller-account-controller");

   mainRouter.get("/logo_url/:id", getUserURL)
   mainRouter.get("/monthly_sales/:id", getCurrentMonthlySales)
   mainRouter.get("/items_available/:id", totalNumberOfItemsAvailable)
   mainRouter.get("/items_sold/:id", totalNumberOfItemsSold)
   mainRouter.get("/rating/:id", sellerRating)
   mainRouter.get("/products/:id", getAllMyProducts)
   mainRouter.put("/products/update/:id", updateProduct)
   mainRouter.put("/products/hide/:id", hideProduct) //send {seller_id : id} in body and customer id in params
   mainRouter.put("/products/show/:id", showProduct) //send {seller_id : id} in body and customer id in params
   mainRouter.post("/products/add/:id", addProduct)
   mainRouter.get("/sales_history/:id", salesHistory)
   



// mainRouter.get("/seller_URL", (req, res) => {
//   res.json("HELLO WORLD");
// });

module.exports = mainRouter;
