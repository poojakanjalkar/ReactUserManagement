import React, { useState } from "react";

function Header(props) {
  return (
    <div>
      <header>
        <h1>Keeper</h1>
        <h2>{`total notes:${props?.notes?.length}`}</h2>
      </header>
    </div>
  );
}

export default Header;
