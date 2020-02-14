import React, { useState, useEffect, useMemo } from "react";
import { format } from "date-fns";
import pt from "date-fns/locale/pt";
import api from "~/services/api";
import {
  Container,
  Header,
  MeetUps,
  MeetUp,
  Data
} from "~/pages/Dashboard/styles";
// import { Container } from './styles';

export default function Dashboard() {
  const [meets, setMeets] = useState([]);

  useEffect(() => {
    function handleListChange(data) {
      setMeets(data);
    }
    let response;
    async function getMeetUps() {
      response = await api.get("evento/showAll");
      console.tron.log(response);
      handleListChange(response.data);
    }
    getMeetUps();
  }, []);

  function formatarDate(data) {
    const dateFormated = format(new Date(data), "d 'de' MMMM", { locale: pt });
    return dateFormated;
  }

  // function componentDidMount() {
  //   getMeetUps();
  // }

  // function componentDidUpdate() {
  //   getMeetUps();
  // }

  return (
    <Container>
      <Header>
        <span>Meus meetups</span>
        <a href="/newMeet">
          <button>Novo meetup</button>
        </a>
      </Header>

      <MeetUps>
        {meets.map(meet => (
          <MeetUp>
            <a>
              <strong>{meet.nome}</strong>
              <span>{formatarDate(meet.data)}</span>
            </a>
          </MeetUp>
        ))}
      </MeetUps>
    </Container>
  );
}
