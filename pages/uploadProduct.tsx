import axios from "axios";
import Papa from "papaparse";
import React, { useState } from "react";

function UploadFile() {
  const [file, setFile] = useState();

  // const fileReader = new window.FileReader();

  const handleOnChange = async (e: any) => {
    const files = e.target.files;
    console.log(files);
    if (files) {
      console.log(files[0]);
      await Papa.parse(files[0], {
        complete: async function (results) {
          console.log("Finished:", results.data);
          await axios.post("http://localhost:4000/uploadcsv", {
            csvFile: results.data,
          });
        },
      });
    }
  };

  const handleOnSubmit = async (e: any) => {
    e.preventDefault();
    await axios
      .post("http://localhost:4000/uploadcsv", {
        csvFile: "hello world",
      })
      .then((data: any) => console.log(data));
    console.log(file);
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
