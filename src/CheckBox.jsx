import { useState } from "react";
export default function CheckBox({ checked = false, onClick }) {
  return (
    <div onClick={onClick}>
      <input
        type="checkbox"
        className="m-4 size-4"
        value={checked}
      />
    </div>
  );
}
