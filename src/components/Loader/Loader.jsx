import { ProgressBar } from 'react-loader-spinner';
import { Backdrop, WrapperForLoader } from './Loader.styled';

const Loader = () => {
  return (
    <Backdrop>
        <WrapperForLoader>
      <ProgressBar
  height="80"
  width="80"
  ariaLabel="progress-bar-loading"
  wrapperStyle={{}}
  wrapperClass="progress-bar-wrapper"
  borderColor = '#F4442E'
  barColor = '#51E5FF'
/>
      </WrapperForLoader>
    </Backdrop>
  );
};
export default Loader