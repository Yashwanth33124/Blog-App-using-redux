import React from "react";
import { useSelector } from "react-redux";

export default function Value() {

  const countValue = useSelector((state) => state.counter.countValue);

  return <p>Counter value is {countValue}</p>;
}
