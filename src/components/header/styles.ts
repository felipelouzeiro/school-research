import styled from 'styled-components';

export const Container = styled.header`
  position: sticky;
  top: 0;
  min-height: 80px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  box-shadow: 0 10px 10px -5px rgba(0, 0, 0, 0.04);
`;

export const Logo = styled.h1`
  text-transform: capitalize;
  padding-left: 40px;
  cursor: pointer;

  a {
    text-decoration: none;
    color: #767676;
  }

  img {
    width: 2.5rem;
    height: 80%;
    transition: opacity 0.5s ease;
    :hover {
      opacity: 0.7;
    }
  }
`;

export const HeaderLinks = styled.div`
  display: flex;

  ul li {
    list-style: none;
    display: inline-block;
    font-size: 18px;
  }

  ul li a {
    text-decoration: none;
    text-transform: uppercase;
    color: #767676;
    padding: 0px 15px;
  }

  ul li a:hover {
    text-decoration: underline;
    color: #d14a38;
  }
`;
