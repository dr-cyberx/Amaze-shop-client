import React, { useState } from "react";

function UploadFile() {
  const [file, setFile] = useState();

  // const fileReader = new window.FileReader();

  const handleOnChange = (e: any) => {
    setFile(e.target.files[0]);
    console.log(e.target.files[0]);
  };

  const handleOnSubmit = (e: any) => {
    e.preventDefault();
    console.log(file);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1> IMPORT CSV </h1>
      <form>
        <input
          type={"file"}
          id={"csvFileInput"}
          accept={".csv"}
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
