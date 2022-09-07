import { Container, Spinner } from './styles';

export const Loading = () => {
  return (
    <Container className="spinner-container">
      <Spinner className="loading-spinner"></Spinner>
    </Container>
  );
};
