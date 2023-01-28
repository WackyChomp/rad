// Schema for user and represents model of data
// Mongoose makes sure data follows these criterias

import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
			min: 2,
			max: 100,
		},
		email: {
			type: String,
			required: true,
			unique: true,
			max: 50,
		},
		password: {
			type: String,
			required: true,
			min: 8,
		},
		email: {
			type: String,
			required: true,
			min: 2,
			max: 100,
		},
		city: String,
		state: String,
		country: String,
		occupation: String,
		phoneNumber: String,
		transactions: Array,
		role: {
			type: String,
			enum: ['user', 'admin', 'majoradmin'],
			default: 'admin'
		},
	},

	{ timestamps: true }

)

const User = mongoose.model('User', userSchema)
export default User;
