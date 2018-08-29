import React from "react";

const Stat = ({ statInfo }) => {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "15px",
        backgroundColor: "#fff",
        width: "220px",
        height: "250px",
        marginBottom: "15px",
        borderRadius: "5px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
      }}
    >
      <div>
        <img src={statInfo.flag} alt="" />
      </div>
      <h3 style={{ color: "#00b39b" }}>{statInfo.title}</h3>
      <p>{statInfo.text}</p>
    </div>
  );
};

export default Stat;
