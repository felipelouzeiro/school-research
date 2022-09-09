import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  min-height: calc(100vh - 150px);
`;

export const SearchBar = styled.form`
  padding: 1rem;
  display: grid;
  grid-template-columns: auto 50px;

  input {
    width: 100%;
    height: 40px;
    font-size: 14px;
    border-radius: 5px 0 0 5px;
  }

  button {
    cursor: pointer;
    color: #fff;
    background-color: blue;
    border-radius: 0 5px 5px 0;
  }
`;

export const PaginationContainer = styled.div`
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
`;
