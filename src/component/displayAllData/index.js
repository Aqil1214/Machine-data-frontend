import React, { useState, useEffect } from "react";
import Axios from "axios";
import SearchFields from "./searchResult";
import DisplaySingleData from "./displaySingleDetail"

export default function DisplayAll() {
  const [apiResponse, setApiResponse] = useState([]);
  const [responseData, setResponseData] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [singleProcessDetail, setSingleProcessDetail] = useState('');



  let machineDataApiResponse;
  useEffect(() => {
    getList();
  }, []);
  useEffect(() => {
    console.log("apiResponse", apiResponse);
  }, [apiResponse]);

  const displyIndividualData = (i) => {

    setSingleProcessDetail(i)
  };

  //change input value
  const searchInputValue = (event) => {

    setInputValue(event.target.value);
    if (event.target.value === '') {
      getList()
    }
  };
  const filterSearchResults = (e) => {
    e.preventDefault();


    let filterByCustomerName = responseData.filter(
      filter => filter.CustomerName.toLowerCase() === inputValue.toLowerCase()
    );

    let filterBySensorData = responseData.filter(
      filter => filter.SensorData.toLowerCase().includes(inputValue.toLowerCase())
    );

    let mappedFilteredData = filterByCustomerName.length > 0 ? filterByCustomerName.map((m) => {

      return (
        <button
          onClick={() => displyIndividualData(m)}
          style={{ margin: "20px" }}
        >
          {m.Process}
        </button>
      );
    }) : filterBySensorData.length > 0 ? filterBySensorData.map((m) => {

      return (
        <button
          onClick={() => displyIndividualData(m)}
          style={{ margin: "20px" }}
        >
          {m.Process}
        </button>
      );
    }) : <div> Result Not found</div>
    setSingleProcessDetail("")

    console.log("checking aaaaa", filterByCustomerName);
    setApiResponse(mappedFilteredData)
  };


  const getList = async () => {
   // const response = await Axios.get("http://157.245.253.70:3000/test");
   const response = await Axios.get("http://localhost:3001/getData");

    if (response) {
      console.log(response.data)

      setResponseData(response.data)
      machineDataApiResponse = response.data.map((m) => {

        return (
          <button
            onClick={() => displyIndividualData(m)}
            style={{ margin: "20px" }}
          >
            {m.Process}
          </button>
        );
      });
      setApiResponse(machineDataApiResponse);
    }
  };

  if (!!apiResponse) {
    return [
      <SearchFields
        searchInputValue={searchInputValue}
        filterSearchResults={filterSearchResults}
        inputValue={inputValue}
      />, apiResponse,
      <DisplaySingleData
        singleProcessDetail={singleProcessDetail}
      />
    ];
  }
}
