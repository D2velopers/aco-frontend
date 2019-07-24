import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Fade, ImageSlideDiv } from '../../styles/Slideshow';
import Logo from '../../components/Logo';
import Button from '../../components/Button';
import Input, { InputPropTypes } from '../../components/Input';

const Wrapper = styled.div`
  min-height: 90vh;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  opacity: 0.95;
`;
const ImageSlider = styled.div`
  width: 100%;
  height: 100%;
  div {
    animation-name: ${({ number, fade, visible }) =>
      Fade(number, fade, visible)};
    ${({ number, fade, visible }) => ImageSlideDiv(number, fade, visible)};
  }
`;
const BackgroundImg = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  background-image: url(${props => props.url});
  background-size: cover;
`;
const Anchor = styled.span`
  color: ${props => props.theme.blueColor};
  cursor: pointer;
`;
const Box = styled.div`
  ${props => props.theme.whiteBox}
  width: 100%;
  max-width: 350px;
`;
const StateChanger = styled(Box)`
  text-align: center;
  padding: 20px 0px;
`;
const Form = styled(Box)`
  padding: 40px;
  padding-bottom: 30px;
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  > div {
    &:first-child {
      margin-bottom: 40px;
    }
  }
  form {
    width: 100%;
    input {
      width: 100%;
      margin-bottom: 7px;
    }
    button {
      margin-top: 10px;
    }
  }
`;
const Options = styled.div`
  margin-top: 20px;
  text-align: center;
  a {
    display: inline-block;
  }
`;

const AuthPresenter = ({
  type,
  setType,
  username,
  fullName,
  secret,
  email,
  password,
  onSubmit,
  onSkip,
  step,
  backgroundImgs,
}) => (
  <>
    <ImageSlider fade={1} visible={10} number={backgroundImgs.length}>
      {backgroundImgs.map(image => (
        <BackgroundImg key={image.id} url={image.url} />
      ))}
    </ImageSlider>
    <Wrapper>
      <Form type={type} step={step}>
        <Logo isFull fontSize={48} />
        {type === 'logIn' && (
          <>
            <FormattedMessage id="msg.login">
              {title => (
                <Helmet>
                  <title>{`${title} | ACO`}</title>
                </Helmet>
              )}
            </FormattedMessage>
            <form onSubmit={onSubmit}>
              <Input locale="msg.email" {...email} type="email" />
              <Input locale="msg.password" {...password} type="password" />
              <Button locale="msg.login" />
            </form>
            <Options>
              <Anchor onClick={onSkip}>로그인 하지않고 둘러보기</Anchor>
            </Options>
          </>
        )}
        {type === 'signUp' && (
          <>
            <FormattedMessage id="msg.signup">
              {title => (
                <Helmet>
                  <title>{`${title} | ACO`}</title>
                </Helmet>
              )}
            </FormattedMessage>
            <form onSubmit={onSubmit}>
              <Input locale="msg.email" {...email} type="email" />
              <Input locale="msg.username" {...username} type="text" />
              <Input locale="msg.password" {...password} type="password" />
              <Button locale="msg.signup" />
            </form>
            <Options>
              <FormattedMessage
                id="app.auth.policyCheck"
                values={{
                  tos: (
                    <Link to="/test">
                      <FormattedMessage id="app.help.tos" />
                    </Link>
                  ),
                  dataPolicies: (
                    <Link to="/test">
                      <FormattedMessage id="app.help.dataPolicies" />
                    </Link>
                  ),
                }}
              />
            </Options>
          </>
        )}
        {type === 'confirm' && (
          <>
            <FormattedMessage id="msg.confirmSecret">
              {title => (
                <Helmet>
                  <title>{`${title} | ACO`}</title>
                </Helmet>
              )}
            </FormattedMessage>
            <form onSubmit={onSubmit}>
              <Input locale="app.auth.pasteSecret" required {...secret} />
              <Button locale="msg.confirm" />
            </form>
          </>
        )}
      </Form>
      {type !== 'confirm' && (
        <StateChanger>
          {type === 'logIn' ? (
            <>
              <FormattedMessage id="app.auth.haveAccount" />{' '}
              <Anchor onClick={() => setType('signUp')}>
                <FormattedMessage id="msg.signup" />
              </Anchor>
            </>
          ) : (
            <>
              <FormattedMessage id="app.auth.haveNotAccount" />{' '}
              <Anchor onClick={() => setType('logIn')}>
                <FormattedMessage id="msg.login" />
              </Anchor>
            </>
          )}
        </StateChanger>
      )}
    </Wrapper>
  </>
);

AuthPresenter.propTypes = {
  type: PropTypes.string,
  backgroundImg: PropTypes.array,
  setType: PropTypes.func,
  onSubmit: PropTypes.func,
  username: InputPropTypes,
  fullName: InputPropTypes,
  secret: InputPropTypes,
  email: InputPropTypes,
  password: InputPropTypes,
  passwordConfirm: InputPropTypes,
};

export default AuthPresenter;
