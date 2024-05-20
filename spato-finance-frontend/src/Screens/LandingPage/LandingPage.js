import { Container, Row } from "react-bootstrap";
import "./LandingPage.css";
import spath from "./spath.png";

const LandingPage = () => {
  return (
    <div className="main ">
      <Container>
        <Row>
          <div className="intro-text container-fluid">
            <div>
              <h3 className="title">WELCOME TO SPATHION</h3>
              <p className="subtitle uppercase">CHOOSE YOUR ROLE</p>
            </div>
            <div className="row ">
              <a
                href="/lender/info"
                className="col-10 offset-1 col-md-4 offset-md-0"
              >
                <div>
                  <button className="landingbutton btn btn-block">
                    LENDER
                  </button>
                </div>
              </a>

              <a
                href="/borrower/info"
                className="col-10 offset-1 col-md-4 offset-md-0"
              >
                <div>
                  <button className="landingbutton btn btn-block">
                    BORROWER
                  </button>
                </div>
              </a>
              <a
                href="/Validator/Lprofiles"
                className="col-10 offset-1 col-md-4 offset-md-0"
              >
                <div>
                  <button className="landingbutton btn btn-block">
                    VALIDATOR
                  </button>
                </div>
              </a>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;
