import { Container, Content, Grid, Divider } from "./styles";
import { useHistory } from "react-router-dom";
import Button from "../../components/Button";
import logo from "../../assets/logo.png";
import grid1 from "../../assets/grid1.png";
import grid2 from "../../assets/grid2.png";
import grid3 from "../../assets/grid3.png";
import grid4 from "../../assets/grid4.png";
import grid5 from "../../assets/grid5.png";
import { useUserInfo } from "../../providers/userInfo";
import { Redirect } from "react-router-dom";

const Home = () => {
  const { isAuthenticated } = useUserInfo();

  const history = useHistory();

  const handleNavigation = (path) => {
    return history.push(path);
  };

  return (
    <Container>
      {isAuthenticated && <Redirect to="/dashboard" />}
      <Content>
        <img src={logo} alt="logo Click Finder"></img>

        <div className="text">
          <p>Encontre fotógrafos de forma rápida e eficaz</p>
          <p>Encontra clientes para seus ensaios</p>
        </div>
        <div className="buttons">
          <Button beigeSchema onClick={() => handleNavigation("/login")}>
            <h5>Login</h5>
          </Button>
          <Button onClick={() => handleNavigation("/signup")}>
            <h5>Cadastre-se</h5>
          </Button>
        </div>
      </Content>
      <Divider />
      <Grid>
        <div>
          <img className="normal" src={grid1} alt="casal"></img>
          <img className="big" src={grid3} alt="criança"></img>
        </div>
        <div>
          <img className="normal" src={grid2} alt="paisagem"></img>
          <img className="normal" src={grid4} alt="cidade"></img>
          <img
            style={{ marginTop: 10 }}
            className="normal"
            src={grid5}
            alt="lugar frio"
          ></img>
        </div>
      </Grid>
    </Container>
  );
};

export default Home;
