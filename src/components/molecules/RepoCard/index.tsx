import React from 'react';
import styled from 'styled-components';
import { Card, Avatar } from '../../atoms';
import { Link } from 'react-router-dom';

type Props = {
  name: string;
  avatarUrl: string;
  htmlUrl: string;
  description: string;
};

const Name = styled.span`
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 10px;
`;
const Description = styled.p`
  text-align: justify;
  word-break: break-all;
`;

export default function RepoCard({
  name,
  avatarUrl,
  htmlUrl,
  description,
}: Props) {
  return (
    <Link to={htmlUrl}>
      <Card>
        <Avatar src={avatarUrl} alt={name} />
        <Name>{name}</Name>
        <Description>{description}</Description>
      </Card>
    </Link>
  );
}
