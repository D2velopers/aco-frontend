import { createAsyncAction } from 'typesafe-actions';
import { RandomImgType } from '../../../api/auth';
import { AxiosError } from 'axios';

export const GET_RANDOM_IMG = 'github/GET_RANDOM_IMG';
export const GET_RANDOM_IMG_SUCCESS = 'github/GET_RANDOM_IMG_SUCCESS';
export const GET_RANDOM_IMG_ERROR = 'github/GET_RANDOM_IMG_ERROR';

export const getRandomImgAsync = createAsyncAction(
  GET_RANDOM_IMG,
  GET_RANDOM_IMG_SUCCESS,
  GET_RANDOM_IMG_ERROR
)<number, RandomImgType[], AxiosError>();
