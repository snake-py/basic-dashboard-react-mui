import axios from 'axios';
import { IAPIService } from '@interfaces/APIServicveInterface';
import { IJobCreationData, IJobGroup } from '@state/reducer-types';
import { fakeCreationDate, fakeGroupData } from '@utils/fake';

const test = axios.create({});

class APIService implements IAPIService {
  api;
  constructor() {
    this.api = axios.create({
      baseURL: process.env.API_GATEWAY_URL,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      //   withCredentials: true,
    });
  }
  async get(url: string, params?: object) {
    return this.api.get(url, { ...params });
  }

  async post(url: string, data?: any) {
    return this.api.post(url, data);
  }

  public async getCreationData(params: {
    userId: string;
  }): Promise<any | IJobCreationData[]> {
    return fakeCreationDate(400);
    // return this.get('/csv-data', params);
  }

  public async getJobGroups(): Promise<any | IJobGroup[]> {
    return fakeGroupData();
    // return this.get('https://us-central1-easy-as-pie-hackathon.cloudfunctions.net/get_sources');
  }
}

const apiService = new APIService();

export default apiService as APIService;
