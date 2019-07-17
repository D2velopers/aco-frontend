import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Card = styled.div`
  ${props => props.theme.whiteBox}
  display:flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  color: black;
`;
const Avatar = styled.div`
  width: 50px;
  height: 50px;
  background-image: url(${props => props.url});
  background-size: cover;
  border-radius: 50%;
  margin-bottom: 15px;
`;
const Name = styled.span`
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 10px;
`;
const Description = styled.p`
  text-align: justify;
  word-break: break-all;
`;

const RepoCard = ({ name, avatarUrl, htmlUrl, description }) => (
  <Card as="a" href={htmlUrl}>
    <Avatar url={avatarUrl} />
    <Name>{name}</Name>
    <Description>{description}</Description>
  </Card>
);

RepoCard.propTypes = {
  name: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string.isRequired,
  htmlUrl: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default RepoCard;
