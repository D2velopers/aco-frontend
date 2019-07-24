import { keyframes } from 'styled-components';

export const Fade = (num, fade, visible) => {
  const a = 100 / ((fade + visible) * num);
  return keyframes`
  0% { opacity: 0; }
  ${a * fade}% { opacity: 1; }
  ${a * (fade + visible)}% { opacity: 1; }
  ${a * (fade + visible + fade)}% { opacity: 0; }
  100% { opacity: 0; }
`;
};
export const ImageSlideDiv = (num, fade, visible) => {
  const loopSetChildAnimationDelay = count => {
    let string = '';
    for (let i = 1; i < count + 1; i++) {
      string += `&:nth-child(${i}) {
        animation-delay: ${(fade + visible) * (i - 1)}s;
      }`;
    }
    return string;
  };
  return `
    animation-duration: ${(fade + visible) * num}s;
    animation-iteration-count: infinite;
    ${loopSetChildAnimationDelay(num)}
  `;
};
