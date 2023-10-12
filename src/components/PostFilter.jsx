import React from "react";
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";
export default function PostFilter({ filter, setFilter }) {
  return (
    <div>
      <MyInput
        placeholder="Поиск"
        value={filter.search}
        onChange={(e) => setFilter({...filter, search: e.target.value})}
      />
      <MySelect
        value={filter.sort}
        onChange={(e) => setFilter({...filter, sort: e})}
        options={[
          { value: "title", name: "По названию" },
          { value: "description", name: "По описанию" },
        ]}
        defaultValue="Сортировка по"
      />
    </div>
  );
}
