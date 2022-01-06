import axios from 'axios';
import { IAPIService } from '@interfaces/APIServicveInterface';
import { IJobCreationData } from '@state/reducer-types';
import { fakeCreationDate } from '@utils/fake';

const test = axios.create({});

class APIService implements IAPIService {
  api;
  constructor() {
    this.api = axios.create({
      baseURL: process.env.API_GATEWAY_URL,
      //   withCredentials: true,
    });
  }
  async get(url: string, params?: object) {
    return this.api.get(url, { ...params });
  }

  async post(url: string, data?: any) {
    return this.api.post(url, data);
  }

  public async getCreationData(params: { userId: string }): Promise<any | IJobCreationData[]> {
    return fakeCreationDate(400)
    // return this.get('/csv-data', params);
  }
}

const apiService = new APIService();

export default apiService as APIService;
