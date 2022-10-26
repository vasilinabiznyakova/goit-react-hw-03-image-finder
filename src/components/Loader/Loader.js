import { RevolvingDot } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div>
      <RevolvingDot
        height="300"
        width="300"
        radius="30"
        color="#4fa94d"
        secondaryColor=""
        ariaLabel="revolving-dot-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        visible={true}
      />
      Loading...
    </div>
  );
};
