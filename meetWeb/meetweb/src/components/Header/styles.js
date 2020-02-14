import styled from "styled-components";

export const Container = styled.div`
  background: #fff;
  padding: 0 30px;
  p {
    color: #9159c1;

    font-size: 20px;
    font-style: italic;
  }
  width: 100%;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  nav {
    display: flex;
    align-items: center;

    img {
      margin-right: 20px;
      padding-right: 30px;
      margin-left: 1px;
      /* border-right: 1px solid #eee; */
      height: 50px;
    }
    strong {
      font-weight: bold;
      color: #9159c1;
    }

    aside {
      display: flex;
      align-items: center;
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  /* padding-left: 10px; */
  border-left: 1px solid #eee;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: flex;
      font-size: 12px;
    }

    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: #999;
    }
  }
  img {
    height: 32px;
    border-radius: 50%;
  }
  @media (max-width: 500px) {
    div {
      text-align: center;
      margin-right: 0px;
    }
    img {
      /* display: none; */
      height: 50px;
    }
  }
`;

export const DivMenu = styled.div`
  background: #99159c;
  border-radius: 40%;
  color: #fff;
  display: flex;
  align-items: center;
  margin-right: 20px;
  @media (max-width: 500px) {
    strong {
      margin-right: 15px;
    }
  }
`;
