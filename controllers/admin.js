const Product = require("../models/product");

//get product page form
exports.getAddProduct = (req, res, next) => {
	res.render("admin/add-product", {
		pageTitle: "Add Product",
		path: "/admin/add-product",
	});
};

//post product
exports.postAddProduct = (req, res, next) => {
	const product = new Product(req.body.title);
	product.save();
	res.redirect("/");
};

//get product
exports.getProducts = (req, res, next) => {
	Product.fetchAll((products) => {
		res.render("admin/products", {
			prods: products,
			pageTitle: "Admin Products",
			path: "/admin/products",
		});
	});
};
