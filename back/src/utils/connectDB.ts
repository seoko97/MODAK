import mongoose from 'mongoose';
import { configs } from './constants';

export const connectDB = () => {
	const mongoUrl = `mongodb+srv://${configs.DB_ID}:${configs.DB_PASSWORD}@cluster0.tv3fn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

	mongoose.connect(mongoUrl, () => {
		console.log('MongoDB Connected');
	});
};
