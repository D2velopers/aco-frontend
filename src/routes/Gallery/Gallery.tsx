import React, { useState, useEffect } from 'react';
import { getRandomImg, RandomImgType } from '../../api/auth';
import { useInfiniteScroll } from '../../lib/hooks';
import { MasonryPostList } from '../../components/organisms';

interface Props {
  sort: string;
}

export default function Gallery({ sort }: Props) {
  const [list, setList] = useState<RandomImgType[]>([]);
  const { page, setPage, loadState } = useInfiniteScroll<RandomImgType[]>(list);

  console.log(sort);

  useEffect(() => {
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
    fetchPosts();
  }, [loadState]);

  return <MasonryPostList list={list} />;
}
