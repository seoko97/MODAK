import { CampsiteModel } from '@src/models';

import { ICampsiteDocument, ICampsiteDTO } from '@src/types/Campsite';

export class CampsiteService {
	constructor(private readonly campsiteModel: typeof CampsiteModel) {}
	async test() {
		return 'test';
	}

	async getUserById() {
		return this.campsiteModel.findOne({ name: /캠프/ });
	}

	async create(data: ICampsiteDTO) {
		return this.campsiteModel.findOrCreate(data);
	}
}

export const campsiteService = new CampsiteService(CampsiteModel);
