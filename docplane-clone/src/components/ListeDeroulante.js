import React from "react";

const ListeDeroulante = () => {
  return (
    <form>
      <select
        style={{
          padding: "10px",
          border: "none",
          borderRadius: "3px",
          marginTop: "20px"
        }}
      >
        <option value="choose">{"choose country".toUpperCase()}</option>
        <option value="argentina">Argentina</option>
        <option value="australia">Australia</option>
        <option value="brazil">Brazil</option>
        <option value="chile">Chile</option>
        <option value="colombia">Colombia</option>
        <option value="france">Czech</option>
        <option value="chine">France</option>
        <option value="italy">Italy</option>
        <option value="mexico">Mexico</option>
        <option value="perou">Perou</option>
        <option value="poland">Poland</option>
        <option value="portugal">Portugal</option>
        <option value="spain">Spain</option>
        <option value="turkey">Turkey</option>
        <option value="uk">UK</option>
      </select>
    </form>
  );
};

export default ListeDeroulante;
