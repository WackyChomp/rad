import Product from '../models.Product.js';
import ProductStat from '../models/ProductStat.js';

export const getProducts = async(req, res) => {
	try{
		const products = await Product.find();			// cycle through products

		const productsWithStats = await Promise.all(		// find ProductStat based on id
			products.map(async (product) => {
				const stat = await ProductStat.find({
					productId: product._id
				})

				return{					// returns array of objects with producgt info and combining with stat info
					...product._doc,
					stat,
				}
			})
		);

		res.status(200).json(productsWithStats);			// returns to frontend
	} catch (error){
			res.status(404).json({ message: error.message })        // errors should be more specific in complex projects
		}
}
