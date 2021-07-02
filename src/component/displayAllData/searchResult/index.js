import React, { useState, useEffect } from "react";

export default function SearchFields({searchInputValue , filterSearchResults,inputValue}) {
  return (
      <form>
          <input type="text" value={inputValue} onChange={searchInputValue}/>
          <button onClick={filterSearchResults}>search</button>
      </form>
  );
}
