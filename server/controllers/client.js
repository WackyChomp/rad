import Product from '../models/Product.js';
import ProductStat from '../models/ProductStat.js';
import User from '../models/User.js';
import Transaction from '../models/Transaction.js';

import getCountryISO3 from 'country-iso-2-to-3';

// Products Page
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


// Customers Page
export const getCustomers = async (req, res) => {
	try {
		const customers = await User.find({ role:'user' }).select('-password')
		res.status(200).json(customers);
	} catch (error) {
		res.status(404).json({ message: error.message })
	}
}


// Transaction Page
export const getTransactions = async (req, res) => {
	// server-side pagination , grab values from query string

	try {
		// sort should be : {'field': 'userId', 'sort': 'desc}
		// what we see from MUI data grid
		const { page=1, pageSize=20, sort=null, search='' } = req.query;
		
		// formatted sort should be { userId: -1 }
		// format this string for mongodb
		const generateSort = () => {
			const sortParsed = JSON.parse(sort);
			const sortFormatted = {
				[sortParsed.field]: sortParsed.sort = 'asc' ? 1 : -1
			};

			return sortFormatted;
		}

		const sortFormatted = Boolean(sort) ? generateSort() : {};

		const transactions = await Transaction.find({
			$or: [{ cost: { $regex: new RegExp(search, 'i') } }],
			$or: [{ userId: { $regex: new RegExp(search, 'i') } }],
			// unable to search _id since the data type isn't formatted correctly :(
		})
			.sort(sortFormatted)
			.skip(page * pageSize)
			.limit(pageSize);

		const total = await Transaction.countDocuments({
			name: { $regex: search , $options: 'i' }
		})

		res.status(200).json({transactions, total});
	} catch (error) {
		res.status(404).json({ message: error.message })
	}
}


// Geography Page
export const getGeography = async(req, res) => {
	try{
		const users = await User.find();

		// convert to countryISO3 format
		const mappedLocations = users.reduce((acc, {country}) => {			// acc - accumulator
			const countryISO3 = getCountryISO3(country)
			if (!acc[countryISO3]){
				acc[countryISO3] = 0;
			}
			acc[countryISO3]++;
			return acc;
		}, {});				// add to this object , key = countries , value = number of users

		// Final formatting for NIVO geography chart , turn into key value pair
		const formattedLocations = Object.entries(mappedLocations).map(
			([country, count]) => {
				return { id:country, value:count }
			}
		)
		
		res.status(200).json(formattedLocations);
	} catch (error){
			res.status(404).json({ message: error.message })        // errors should be more specific in complex projects
		}
}