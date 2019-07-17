import React, { useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import action from '../actions';
import Loader from '../components/Loader';
import Template from '../components/PageTemplate';
import RepoCard from '../components/RepoCard';

const RepoList = styled.div`
  margin: 0 auto;
  margin-top: 7%;
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(4, 220px);
  grid-template-rows: 220px;
  grid-auto-rows: 220px;
`;
const ResultText = styled.h1`
  text-align: center;
  font-size: ${props => props.theme.emphSize};
`;

const Search = ({ location: { search } }) => {
  const dispatch = useDispatch();
  const term = search.split('=')[1];
  const searchRepos = () => dispatch(action.searchRepositories.request(term));
  useEffect(() => {
    searchRepos();
  }, []);
  const {
    status,
    data: { items },
  } = useSelector(({ searchReducer }) => searchReducer);
  return (
    <Template>
      {status === 'pending' && <Loader />}
      {status === 'success' && (
        <>
          <ResultText>
            {`${items.length} repository results for "${term}"`}
          </ResultText>
          <RepoList>
            {items.map(item => (
              <RepoCard
                key={item.id}
                name={item.name}
                avatarUrl={item.owner.avatar_url}
                htmlUrl={item.html_url}
                description={item.description}
              />
            ))}
          </RepoList>
        </>
      )}
    </Template>
  );
};

Search.propTypes = {
  location: PropTypes.shape({
    search: PropTypes.string,
  }),
};

export default Search;
