import React from "react";
import { useSelector } from "react-redux";

import { Table } from "react-bootstrap";


export const RaceTable = () => {
  const RaceData = useSelector(
    (state) => state.race.race
  );
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>No</th>
          <th>Horse</th>
          <th>Time</th>
         
        </tr>
      </thead>
      <tbody>
        {RaceData && RaceData.length > 0 ? (
          RaceData.map((obj)=>{
           return <tr key={obj.id}>
              <td>{obj.id}</td>
              <td>{obj.horseName}</td>
              <td>{obj.time}</td>
            </tr>
          })
            
        ) : (
          <tr>
            <td colSpan="4" className="text-center">
              No Race to show{" "}
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};
