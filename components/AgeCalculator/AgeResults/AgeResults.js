"use client";
import { useRecoilValue } from "recoil";
import { age, dates } from "@/Recoil/atoms/Dates";

export default function AgeResults() {
  const ages = useRecoilValue(age);
  const datesState = useRecoilValue(dates);

  return (
    <>
      <div>
        <div>
          <span>{ages.year ? ages.year : datesState.year == 0 ? 0 : "--"}</span>
          <span>years</span>
        </div>
        <div>
          <span>
            {ages.month ? ages.month : datesState.month == 0 ? 0 : "--"}
          </span>
          <span>months</span>
        </div>
        <div>
          <span>{ages.day ? ages.day : datesState.month == 0 ? 0 : "--"}</span>
          <span>days</span>
        </div>
      </div>
    </>
  );
}
