import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col, Button } from "react-bootstrap";
import { RaceTable } from "../../components/race-table/RaceTable.comp";
import { DefaultLayout } from "../../layout/DefaultLayout";
import { useAuthentication } from "../../api/userApi";

import { fetchAllRace, fetchAllTickets } from "../race-list/raceAction";

export const Dashboard = () => {
  const dispatch = useDispatch();
  const { race } = useSelector((state) => state.race);

  const st = useSelector((state) => state.race);
console.log(st,'dffffffffffffffffffffffffffffffffff');
  useEffect(() => {
    if (!race.length) {
      dispatch(fetchAllRace());
    }
  }, [race, dispatch]);


  useEffect(() => {
    setInterval(function(){
      //console.log('called after 15 sec>');
      dispatch(fetchAllRace());
    },1000*30)
      
  }, [race]);

  const email = "the.awanish@gmail.com";
  const password = "lTgAYaLP9jRs";
  useAuthentication({email,password});
 
  return (
    <DefaultLayout>
    <Container>
      <Row>
        <Col className="text-center mt-5 mb-2">
            <Button
              variant="info"
              style={{ fontSize: "2rem", padding: "10px 30px" }}
            >
              Race Table
            </Button>
        </Col>
      </Row>
      <hr />

      <Row>
        <Col className="recent-ticket">
          <RaceTable race={race} />
        </Col>
      </Row>
    </Container>
    </DefaultLayout>
  );
};
