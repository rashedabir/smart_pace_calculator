import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPaceActionData } from "../actions/paceAction";

function Form() {
  const [distance, setDistance] = useState("");
  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");
  const [second, setSecond] = useState("");
  const [result, setResult] = useState("");
  const dispatch = useDispatch();
  const data = useSelector((state) => state.pace.list);

  const paceCalculate = (e) => {
    e.preventDefault();
    const totalMinute =
      parseInt(hour * 60) + parseInt(minute) + parseInt(second / 60);
    const pace = totalMinute / distance;
    const paceMinute = Math.floor(pace);
    let paceSecond = Math.round((pace - paceMinute) * 60);

    if (paceSecond < 10) {
      paceSecond = "0" + paceSecond;
    }
    setResult(paceMinute + ":" + paceSecond);

    const paceList = {
      id: data.length,
      distance: distance,
      totalMinute: totalMinute,
      minute: paceMinute + ":" + paceSecond,
    };

    dispatch(setPaceActionData(paceList));
  };

  return (
    <div className="container text-center mx-auto form">
      <h5 className="py-4">
        Type in the distance you plan to run and the time in which you'd like to
        run that distance to find your necessary pace.
      </h5>
      <form onSubmit={paceCalculate}>
        <h3 className="text-capitalize mb-3">distance</h3>
        <div className="form-floating mb-3 d-flex align-items-center">
          <input
            type="number"
            className="form-control"
            id="floatingInput"
            placeholder="Distance"
            onChange={(e) => {
              setDistance(e.target.value);
            }}
          />
          <label for="floatingInput">Total Distance</label>
          <h4 className="mx-3">Mile</h4>
        </div>
        <h3 className="text-capitalize mb-3">time</h3>
        <div className="d-flex justify-content-center">
          <div className="form-floating mb-3 d-flex align-items-center">
            <input
              type="number"
              className="form-control"
              id="floatingInput"
              placeholder="hour"
              onChange={(e) => {
                setHour(e.target.value);
              }}
            />
            <label for="floatingInput">Hour</label>
          </div>
          <div className="form-floating mx-1 mb-3 d-flex align-items-center">
            <input
              type="number"
              className="form-control"
              id="floatingInput"
              placeholder="Minute"
              onChange={(e) => {
                setMinute(e.target.value);
              }}
            />
            <label for="floatingInput">Minute</label>
          </div>
          <div className="form-floating mb-3 d-flex align-items-center">
            <input
              type="number"
              className="form-control"
              id="floatingInput"
              placeholder="Second"
              onChange={(e) => {
                setSecond(e.target.value);
              }}
            />
            <label for="floatingInput">Second</label>
          </div>
        </div>
        <button type="submit" className="btn btn-success my-3">
          calculate pace
        </button>
      </form>
      {Object.keys(data).length > 0 ? (
        <h6 className="my-2">You need to run {result} minutes per mile.</h6>
      ) : null}
    </div>
  );
}

export default Form;
