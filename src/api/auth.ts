import axios from 'axios';

export interface RandomImgType {
  breeds: any[];
  id: string;
  url: string;
  width: number;
  height: number;
}

export async function getRandomImg(limit = 10, page = 1) {
  const response = await axios.get<RandomImgType[]>(
    'https://api.thecatapi.com/v1/images/search',
    {
      headers: {
        'x-api-key': 'DEMO-API-KEY',
      },
      params: {
        limit,
        order: 'Desc',
        page,
      },
    }
  );

  return response.data;
}
