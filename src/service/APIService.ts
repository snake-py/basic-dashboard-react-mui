import axios from 'axios';
import { IAPIService } from '@interfaces/APIServicveInterface';

const test = axios.create({});

class APIService implements IAPIService {
  api;
  constructor() {
    this.api = axios.create({
    //   baseURL: process.env.API_GATEWAY_URL,
    //   withCredentials: true,
    });
  }
}
