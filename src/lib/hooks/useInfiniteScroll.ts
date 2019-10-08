import { useState, useEffect } from 'react';
import throttle from 'lodash/throttle';

export interface InfiniteScrollTypes {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  loadState: boolean;
}

export function useInfiniteScroll<T extends any[]>(
  list: T
): InfiniteScrollTypes {
  const [page, setPage] = useState(1);
  const [loadState, setLoadState] = useState(false);

  const onScroll = () => {
    const scrollHeight = Math.max(
      document.documentElement.scrollHeight,
      document.body.scrollHeight
    );
    const scrollTop = Math.max(
      document.documentElement.scrollTop,
      document.body.scrollTop
    );
    const clientHeight = document.documentElement.clientHeight;
    const BASE_TOP = document.documentElement.clientHeight / 1.5;

    if (scrollHeight - (scrollTop + clientHeight) < BASE_TOP) {
      setLoadState(true);
    } else setLoadState(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', throttle(onScroll, 300), {
      passive: true,
    });
    return () => {
      window.removeEventListener('scroll', throttle(onScroll, 300));
    };
  }, []);
  useEffect(() => {
    if (loadState) {
      setPage(page + 1);
    }
  }, [loadState]);

  return { page, setPage, loadState };
}
