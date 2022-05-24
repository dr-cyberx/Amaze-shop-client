import React, { useState } from "react";
import axios from "axios";
import Papa from "papaparse";

function UploadFile() {
  const [file, setFile] = useState<any>();

  const handleOnChange = (e: any): void => {
    const files = e.target.files;
    if (files) {
      Papa.parse(files[0], {
        complete: function (results) {
          setFile(results.data);
        },
      });
    }
  };

  const handleOnSubmit = async (e: any): Promise<void> => {
    e.preventDefault();
    await axios.post("http://localhost:4000/uploadcsv", {
      csvFile: file,
    });
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1> IMPORT CSV </h1>
      <form>
        <input
          type={"file"}
          id={"csvFileInput"}
          accept=".xlsx, .xls, .csv"
          onChange={handleOnChange}
        />

        <button
          onClick={e => {
            handleOnSubmit(e);
          }}
        >
          IMPORT CSV
        </button>
      </form>

      <br />
    </div>
  );
}
export default UploadFile;
