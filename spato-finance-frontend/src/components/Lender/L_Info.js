import React from "react";
import { Card, Container } from "react-bootstrap";
const L_Info = () => {
  return (
    <div className="page">
      <br />
      <Container >
        <div className="CSS2">
          <Card className="maincard">
            <Card.Header className="chead ">
              <div style={{ textAlign: "center" }}>
                <h3>Instructions for lending activity</h3>
              </div>
            </Card.Header>
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <p>
                  {" "}
                  <ol>
                    <li>All operations are in USDT tokens.</li>
                    <br />
                    <li>
                      This is a window for an user to Lend/Withdraw their USDT
                      tokens.
                    </li>
                    <br />
                    <li>
                      There are particularly two main sections here- Profile and
                      Wallet.
                    </li>
                    <br />
                    <li>
                      The user first needs to fill in the Profile section
                      inorder to proceed towards Wallet. The validator will then
                      verify the details. Until then Wallet will be frozen for
                      the user.
                    </li>
                    <br />
                    <li>
                      After the user proceeds towards Wallet. He can lend USDT.
                      The tokens will be locked for a period of 30 days (The
                      date will be displayed). Until then the withdraw is
                      frozen.
                    </li>
                    <br />
                    <li>
                      After the locking period the Withdraw will get enabled and
                      the user can withdraw their amount. With a rate of
                      interest (ROI) OF 14%.
                    </li>
                    <br />
                  </ol>{" "}
                </p>
              </blockquote>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default L_Info;
