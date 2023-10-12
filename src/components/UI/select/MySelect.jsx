import React from "react";

export default function MySelect({ options, defaultValue, value, onChange }) {
  return (
    <select value={value} onChange={e => onChange(e.target.value)}>
      <option disabled value="">
        {defaultValue}
      </option>
      {options.map((el) => (
        <option key={el.value} value={el.value}>
          {el.name}
        </option>
      ))}
    </select>
  );
}
