import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import GalleryPresenter from './GalleryPresenter';
import { search } from '../../api';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';

const navItems = {
  main: {
    label: ['recent', 'trending'],
    url: ['/recent', '/'],
  },
  sub: {
    label: ['follow', 'bookmark', 'recommended', 'history'],
    url: ['/follow', '/bookmark', '/recommended', '/history'],
  },
};

export default withRouter(({ location }) => {
  const [events, setEvents] = useState([]);
  const [currentEvent, setCurrentEvent] = useState(0);
  const [listImages, setListImages] = useState([]);
  const [listPage, setListPage] = useState(1);
  const [fetchAPI, setFetchAPI] = useState('');

  let timeId;

  const bannerSlide = () => {
    if (currentEvent === events.length - 1) {
      timeId = setTimeout(() => setCurrentEvent(0), 3000);
    } else {
      timeId = setTimeout(() => setCurrentEvent(currentEvent + 1), 3000);
    }
  };
  const bannerControl = {
    next: () => {
      clearTimeout(timeId);
      if (currentEvent === events.length - 1) {
        setCurrentEvent(0);
      } else {
        setCurrentEvent(currentEvent + 1);
      }
    },
    prev: () => {
      clearTimeout(timeId);
      if (currentEvent === 0) {
        setCurrentEvent(events.length - 1);
      } else {
        setCurrentEvent(currentEvent - 1);
      }
    },
  };
  const fetchMoreListItems = () => {
    setIsFetching(false);
    search
      .randomImg(10, listPage + 1)
      .then(({ data }) => {
        setListImages(listImages.concat(data));
        setIsFetching(false);
        setListPage(listPage + 1);
      })
      .catch(err => console.log(err));
  };

  const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreListItems);

  useEffect(() => {
    search
      .randomImg()
      .then(({ data }) => setEvents(data))
      .catch(err => console.log(err));
  }, []);
  useEffect(() => {
    setListImages([]);
    setListPage(1);
    search
      .randomImg(10, 1)
      .then(({ data }) => setListImages(data))
      .catch(err => console.log(err));
  }, [location.pathname]);
  useEffect(() => {
    bannerSlide();
  });

  return (
    <GalleryPresenter
      events={events}
      currentEvent={currentEvent}
      navItems={navItems}
      bannerControl={bannerControl}
      listImages={listImages}
      isFetching={isFetching}
    />
  );
});
