import axios, { AxiosResponse } from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://localhost:3000'
});


export class AxiosRequestExample {
  private readonly route = '/user';
  async request(param: any): Promise<AxiosResponse> {
    const response = axiosInstance.post('/route', { payload: 'payload' });
    return response;
  }
}