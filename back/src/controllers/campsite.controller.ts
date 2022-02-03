import { Request, Response } from 'express';
import axios from 'axios';

import { CampsiteService, campsiteService } from '@services/campsite.service';

import { ICampsiteDocument, ICampsiteDTO } from '@src/types/Campsite';
import { serviceKey } from '@src/utils/constants';
import { IAxiosSchduleDTO } from '@src/types';
import { getCampData } from '@src/utils/dataParser';

export class CampsiteController {
	constructor(private readonly campsiteService: CampsiteService) {}
	test = async (req: Request, res: Response) => {
		const modelTest = await this.campsiteService.test();

		const camp = await this.campsiteService.getUserById();
		console.log(camp);

		res.send(modelTest);
	};

	schedule = async () => {
		try {
			const camps = await axios.get(serviceKey);
			await Promise.all(
				camps.data.response.body.items.item.map((camp: IAxiosSchduleDTO) => {
					const campsite = getCampData(camp);
					return this.campsiteService.create(campsite);
				}),
			);
		} catch (e: any) {
			console.log(e.message);
		}
	};
}

export const campsiteController = new CampsiteController(campsiteService);
