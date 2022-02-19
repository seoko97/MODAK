import app from './app';
import { configs } from './utils/constants';

app.listen(configs.PORT, () => {
	console.log(`Example app listening at http://localhost:${configs.PORT}`);
});
