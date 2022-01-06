import { IJobCreationData } from '@state/reducer-types';
import { AxiosInstance } from 'axios';

export interface IAPIService {
  api: AxiosInstance;
  get(url: string, params?: object): Promise<any>;
  post(url: string, data?: object): Promise<any>;
  getCreationData(params: { userId: string }): Promise<IJobCreationData[]>;
}
