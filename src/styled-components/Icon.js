import styled from 'styled-components';

const Icon = styled.img.attrs((props) => ({
  src: props.src,
  alt: props.alt,
}))`
  border-radius: 50%;
  width: 50px;
  height: 50px;
`;

export default Icon;