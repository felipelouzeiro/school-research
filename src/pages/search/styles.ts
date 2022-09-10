import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-height: calc(100vh - 150px);
`;

export const SearchBar = styled.form`
  padding: 1rem;
  display: grid;
  grid-template-columns: auto 50px;
  background-color: rgba(255, 255, 255, 0.1);
  gap: 5px;

  input {
    width: 100%;
    height: 40px;
    font-size: 16px;
    border-radius: 5px 0 0 5px;
    padding: 2px;
    border-width: 1px;
  }

  button {
    cursor: pointer;
    color: #fff;
    background-color: blue;
    border-radius: 0 5px 5px 0;
    border-width: 1px;
    border-left: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: opacity 0.5s ease;
    cursor: pointer;

    :hover {
      opacity: 0.7;
    }
  }
`;

export const PaginationContainer = styled.div`
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
`;
