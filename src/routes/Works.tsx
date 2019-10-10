import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

interface Params {
  work: string;
}

export default function Work({ match }: RouteComponentProps<Params>) {
  const workId = match.params.work;
  return <div>{`work id : ${workId}`}</div>;
}
