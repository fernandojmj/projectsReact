import React from "react";
import { useSelector } from "react-redux";
import Notification from "~/components/Notifications";
import { Container, Content, Profile } from "./styles";
// import { Content } from "~/pages/_layouts/auth/styles";
import { Link } from "react-router-dom";
import logo from "~/assets/logo.png";

export default function Header() {
  let profile = useSelector(state => state.user.profile);

  return (
    <Container>
      <Content>
        <nav>
          <Link to="/dashboard">
            <img src={logo} alt="Barber Shop" />
          </Link>
          <strong>Barber Shop</strong>
        </nav>

        <aside>
          <Profile>
            <Notification />
            <div>
              <strong>{profile.username}</strong>
              <Link to="/Profile">perfil</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/50/abott@adorable.png"
              alt="profile"
            ></img>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
