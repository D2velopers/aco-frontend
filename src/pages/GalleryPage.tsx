import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { getRandomImg, RandomImgType } from '../api/auth';
import { useInfiniteScroll } from '../lib/hooks';
import { MasonryPostList } from '../components/organisms';

export default function GalleryPage({ location, match }: RouteComponentProps) {
  const [list, setList] = useState<RandomImgType[]>([]);
  const { page, setPage, loadState } = useInfiniteScroll<RandomImgType[]>(list);

  async function fetchPosts() {
    console.log('third');
    try {
      const res: RandomImgType[] = await getRandomImg(undefined, page);
      setPage(page + 1);
      setList(list.concat(res));
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    fetchPosts();
  }, [loadState]);

  return <MasonryPostList list={list} />;
}
