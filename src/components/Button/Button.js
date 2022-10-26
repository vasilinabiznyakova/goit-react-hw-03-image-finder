import { LoadMoreButton } from './Button.styled';
export const Button = ({ loadMore, buttonName }) => {
  return (
    <LoadMoreButton type="submit" onClick={loadMore}>
      {buttonName}
    </LoadMoreButton>
  );
};
