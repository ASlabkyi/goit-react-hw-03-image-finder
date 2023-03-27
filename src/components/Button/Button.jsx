import { Button } from './Button.styled';
import { ButtonWrapper } from './Button.styled';

export const LoadMoreBtn = ({ title, onClick }) => {
  return (
    <ButtonWrapper>
      <Button onClick={onClick}>{title}</Button>
    </ButtonWrapper>
  );
};
