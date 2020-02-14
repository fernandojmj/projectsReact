import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Notification from "~/components/Notifications";
import Menu from "~/components/Menu";
import { Container, Content, Profile, DivMenu } from "./styles";

// import { Content } from "~/pages/_layouts/auth/styles";
import { Link } from "react-router-dom";
import logo from "~/assets/logo.png";

export default function Header() {
  let profile = useSelector(state => state.user.profile);
  const dispatch = useDispatch();

  return (
    <Container>
      <Content>
        <nav>
          <Link to="/dashboard">
            <img src={logo} alt="Meet App" />
          </Link>
        </nav>
        <p>MeetApp</p>
        <aside>
          <Profile>
            <Notification />
            <div>
              <strong>{profile.username}</strong>
              <DivMenu>
                <Menu />
              </DivMenu>
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
