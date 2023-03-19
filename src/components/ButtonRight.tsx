import React from "react";
import { BsArrowLeftCircleFill } from "react-icons/bs";

export default function ButtonRight({ onClick }: any) {
  return (
    <div className="absolute top-2/4 -translate-y-2/4 cursor-pointer -left-2 z-10 text-3xl" onClick={onClick}>
      <BsArrowLeftCircleFill />
    </div>
  );
}
