import React, { useState } from 'react';

const PopUp = () => {
  const [showPopUp, setShowPopUp] = useState(false);
  const handleShow = () => setShowPopUp(true);

  return (
    <div>
      <button onClick={handleShow}>Abrir Pop-Up</button>
      {showPopUp && (
        <div className="pop-up">
          <h1>Pop-Up</h1>
          <p>Conteúdo do Pop-Up</p>
        </div>
      )}
    </div>
  );
};

export default PopUp;
