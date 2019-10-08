import React from 'react';
import { RandomImgType } from '../../../api/auth';
import { Masonry, Card } from '../../atoms';

interface Props {
  list: RandomImgType[];
}

export function MasonryPostList({ list }: Props) {
  return (
    <Masonry>
      {list.map(item => (
        <img key={`Auth_bgImg_${item.id}`} src={item.url} />
      ))}
    </Masonry>
  );
}
