import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router';
import { getRandomImg, RandomImgType } from '../api/auth';
import { GalleryLayout } from '../layouts';
import GalleryPage from '../pages/GalleryPage';

export default function Gallery() {
  const [list, setList] = useState<RandomImgType[]>([]);

  useEffect(() => {
    getRandomImg().then((res: RandomImgType[]) => {
      setList(res);
    });
  }, []);

  return (
    <GalleryLayout>
      <Switch>
        <Route path={'/recent'} component={GalleryPage} />
        <Route path={'/trending'} component={GalleryPage} />
        <Route path={'/follow'} component={GalleryPage} />
        <Route path={'/bookmark'} component={GalleryPage} />
        <Route path={'/recommended'} component={GalleryPage} />
        <Route path={'/history'} component={GalleryPage} />
        <Route path={'/'} component={GalleryPage} />
      </Switch>
    </GalleryLayout>
  );
}
