import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAllRace } from "./raceAction";

import { Container, Row, Col, Button } from "react-bootstrap";

import { SearchForm } from "../../components/search-form/SearchForm.comp";
import { TicketTable } from "../../components/race-table/RaceTable.comp";

import { Link } from "react-router-dom";

export const TicketLists = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllRace());
  }, [dispatch]);

  return (
    <Container>
     
      <Row className="mt-4">
        <Col>
          <Link to="/add-ticket">
            <Button variant="info">Add New Ticket</Button>
          </Link>
        </Col>
        <Col className="text-right">
          <SearchForm />
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <TicketTable />
        </Col>
      </Row>
    </Container>
  );
};
