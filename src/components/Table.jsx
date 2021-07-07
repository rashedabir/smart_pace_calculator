import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteSpaceAction } from "../actions/paceAction";

function Table() {
  const data = useSelector((state) => state.pace.list);
  const dispatch = useDispatch();
  return (
    <div className="container table my-4">
      {Object.keys(data).length > 0 ? (
        <table className="table table-striped">
          <thead className="bg-info">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Total Minute</th>
              <th scope="col">Distance</th>
              <th scope="col">Minute Per Mile</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((pace) => (
                <tr>
                  <th scope="row">{pace.list.id}</th>
                  <td> {pace.list.totalMinute} </td>
                  <td>{pace.list.distance}</td>
                  <td>{pace.list.minute}</td>
                  <td>
                    <i
                      onClick={() => {
                        dispatch(deleteSpaceAction(pace.list.id));
                      }}
                      className="fas fa-minus-circle"
                    ></i>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      ) : null}
    </div>
  );
}

export default Table;
