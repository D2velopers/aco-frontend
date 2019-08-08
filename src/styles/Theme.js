const BOX_BORDER = '1px solid #e6e6e6';
const BORDER_RADIUS = '4px';
const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
};

export default {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  globalSpace: '1.5rem',
  bgColor: '#fafafa',
  blueColor: '#61dafb;',
  greyColor: '#999',
  lightGreyColor: '#ddd',
  darkGreyColor: '#282c34',
  emphSize: '36px',
  boxBorder: `${BOX_BORDER}`,
  borderRadius: `${BORDER_RADIUS}`,
  whiteBox: `border:${BOX_BORDER};
             border-radius:${BORDER_RADIUS};
             background-color:white;
            `,
};
