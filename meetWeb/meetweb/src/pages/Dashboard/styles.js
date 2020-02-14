import styled from "styled-components";

export const Container = styled.div``;
export const Header = styled.div`
  /* max-width: 100%; */
  margin: 50px auto;
  display: flex;
  width: 50%;

  span {
    /* margin-right: 300px; */
    font-size: 30px;
    font-style: bold;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    color: #ffff;
    width: 70%;
    padding-left: 10%;
  }
  button {
    height: 30px;
    width: 100px;
    background-color: #00ff7f;
    border: 0;
    border-radius: 20px;
    &:hover {
      background: #f78f;
    }
  }
  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const MeetUps = styled.div`
  /* max-width: 100%; */
  /* background-color: #fffff0; */
  background: rgba(0, 0, 0, 0.6);
  width: 50%;
  border-radius: 10px;
  padding: 10px;
  margin: 50px auto;

  @media (max-width: 500px) {
    width: 95%;
  }
`;

export const MeetUp = styled.div`
  max-width: 100%;
  /* margin: 50px auto; */
  background: rgba(0, 0, 0, 0.2);
  margin-top: 10px;
  height: 40px;
  display: inline-block;
  /* flex-direction: row; */
  color: #ffff;
  border-color: #fff;
  border-width: 10px;
  border-radius: 20px;
  width: 100%;
  a {
    width: 100%;
    display: flex;
    flex-direction: row;
    line-height: 240%;
  }
  strong {
    font-size: 12px;
    /* flex-direction: column; */
    padding-right: auto;
    padding-left: 20px;
    width: 80%;

    /* display: inline-block; */
  }
  span {
    margin-right: 10px;
    font-size: 12px;
    width: 20%;
  }

  @media (max-width: 500px) {
    max-width: 100%;
    background: rgba(0, 0, 0, 0.2);
    margin-top: 10px;
    height: auto;
    color: #ffff;
    border-radius: 20px;
    width: 100%;
    padding-top: 60px;
    padding-bottom: 60px;
    a {
      width: 100%;
      line-height: 100%;
      /* display: block; */
      text-align: center;
    }
    strong {
      font-size: 12px;
      width: 100%;
      display: block;

      /* display: inline-block; */
    }
    span {
      margin-right: 10px;
      font-size: 12px;
      width: 100%;
      display: block;
    }
  }
`;
