import PropTypes from 'prop-types';

export const ErrorView = ({ message }) => {
  return <b>{message}</b>;
};

ErrorView.propTypes = {
  message: PropTypes.string.isRequired,
};
