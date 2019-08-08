import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import { Link, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import SubHeader from '../../components/SubHeader';
import Stepper from '../../components/Stepper';
import Masonry from '../../components/Masonry';

const Banners = styled.div`
  width: 100%;
  height: 25vw;
  display: flex;
  justify-content: space-between;
`;
const Banner = styled.div`
  width: 100%;
  height: 25vw;
  position: absolute;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  opacity: ${props => (props.showing ? 1 : 0)};
  transition: opacity 0.5s linear;
`;
const BannerControl = styled.button`
  z-index: 2;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.1);
  border: 0;
  padding: 0 5px;
  width: 5vw;
  overflow: hidden;
  transition: background-color 300ms ease;
  cursor: pointer;
  outline: none;
  span {
    display: inline-block;
    width: 2vw;
    height: 2vw;
    opacity: 0.65;
    border-bottom: 3px solid white;
    border-left: 3px solid white;
    transition: opacity 300ms ease;
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
    span {
      opacity: 0.95;
    }
  }
  &:active {
    border: none;
  }
`;
const BannerStepperWrapper = styled.div`
  z-index: 2;
  display: flex;
  flex-direction: column-reverse;
  padding-bottom: 1.2rem;
`;
const Post = styled.img`
  width: 100%;
  &:before {
    counter-increment: items;
    content: counter(items);
  }
`;

const GalleryPresenter = ({
  events,
  currentEvent,
  navItems,
  bannerControl,
  listImages,
  isFetching,
}) => (
  <>
    <FormattedMessage id="app.logo.subtitle">
      {subtitle => (
        <Helmet>
          <title>{`ACO - ${subtitle}`}</title>
        </Helmet>
      )}
    </FormattedMessage>
    <Banners>
      {events &&
        events.map((event, index) => (
          <Banner
            key={event.id}
            id={event.id}
            src={event.url}
            showing={index === currentEvent}
          />
        ))}
      <BannerControl onClick={bannerControl.prev}>
        <span style={{ marginLeft: '0.6vw', transform: 'rotate(45deg)' }} />
      </BannerControl>
      <BannerStepperWrapper>
        <Stepper list={events} currentIndex={currentEvent} />
      </BannerStepperWrapper>
      <BannerControl onClick={bannerControl.next}>
        <span style={{ marginRight: '1.2vw', transform: 'rotate(-135deg)' }} />
      </BannerControl>
    </Banners>
    <SubHeader
      main={navItems.main}
      sub={navItems.sub}
      inital={navItems.main[1]}
    />
    <Switch>
      <Route path="/recent" render={() => Board(listImages)} />
      <Route path="/follow" render={() => Board(listImages)} />
      <Route path="/bookmark" render={() => Board(listImages)} />
      <Route path="/recommended" render={() => Board(listImages)} />
      <Route path="/history" render={() => Board(listImages)} />
      <Route path="/" render={() => Board(listImages)} />
    </Switch>
  </>
);

const Board = list => (
  <Masonry>
    {list.map(item => (
      <Post key={item.id} id={item.id} src={item.url} />
    ))}
  </Masonry>
);

GalleryPresenter.propTypes = {
  events: PropTypes.array.isRequired,
  currentEvent: PropTypes.number.isRequired,
  navItems: PropTypes.shape({
    main: PropTypes.shape({
      label: PropTypes.array.isRequired,
      url: PropTypes.array.isRequired,
    }),
    sub: PropTypes.shape({
      label: PropTypes.array.isRequired,
      url: PropTypes.array.isRequired,
    }),
  }),
  bannerControl: PropTypes.shape({
    next: PropTypes.func.isRequired,
    prev: PropTypes.func.isRequired,
  }),
};

export default GalleryPresenter;
