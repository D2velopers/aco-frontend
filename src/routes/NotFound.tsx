import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

export default function NotFound({ location }: RouteComponentProps) {
  return <div>{`${location.pathname} is Not Found!!!`}</div>;
}
