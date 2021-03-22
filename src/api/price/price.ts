import { authRequest } from '../request';

export interface PriceInformation {
    age: string;
    car: string;
    price: string;
}

export interface PriceRequestAnswer {
    globalPrice: number;
    universalPrice: number;
}

export class PriceApiService {
    public static async getPrice(priceInformation: PriceInformation) {
        return authRequest<PriceRequestAnswer>({
            url: `/price`,
            method: 'POST',
            data: priceInformation
        });
    }
}