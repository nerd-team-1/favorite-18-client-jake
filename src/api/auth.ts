import {RequestUser} from '../types/common';
import instance from './axios';

type ResponseToken = {
  accessToken: string;
  refreshToken: string;
};

const postLogin = async ({
  email,
  password,
}: RequestUser): Promise<ResponseToken> => {
  const {data} = await instance.post('/open-api/auth/login', {
    email,
    password,
  });

  return data;
};

const getProfile = async (): Promise<any> => {
  const {data} = await instance.get('/api/v1/user/me');

  return data;
};

export {postLogin, getProfile};
export type {ResponseToken};
