import { LoadMoreButton } from './Button.styled';
import PropTypes from 'prop-types';

export const Button = ({ loadMore, buttonName }) => {
  return (
    <LoadMoreButton type="submit" onClick={loadMore}>
      {buttonName}
    </LoadMoreButton>
  );
};

Button.propTypes = {
  loadMore: PropTypes.func.isRequired,
  buttonName: PropTypes.string.isRequired,
};
