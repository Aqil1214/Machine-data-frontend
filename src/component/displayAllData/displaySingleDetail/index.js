import React, { useState, useEffect } from "react";

export default function DisplaySingleData({ singleProcessDetail }) {
  let deatil = "";
  if (singleProcessDetail !== "") {
    return (
      <div>
        <span><b>CustomerId :</b> {singleProcessDetail.CustomerId}</span>
        <br />
        <span><b>CustomerName :</b> {singleProcessDetail.CustomerName}</span>
        <br />
        <span><b>MachineId :</b> {singleProcessDetail.MachineId}</span>
        <br />

        <span><b>MachineNr :</b> {singleProcessDetail.MachineNr}</span>
        <br />
        <span><b>MachineTypeSerial :</b> {singleProcessDetail.MachineTypeSerial}</span>
        <br />

        <span><b>OnlineFrom :</b> {singleProcessDetail.OnlineFrom}</span>
        <br />
        <span><b>Process :</b> {singleProcessDetail.Process}</span>
        <br />

        <span><b>ProcessTime :</b> {singleProcessDetail.ProcessTime}</span>
        <br />
        <span><b>SensorData :</b> {singleProcessDetail.SensorData}</span>

      </div>
    );
  }
  else {
    return (
      <div>

      </div>
    );
  }
}
