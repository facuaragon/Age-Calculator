"use client";
import { atom } from "recoil";

export const dates = atom({
  key: "dates",
  default: {
    day: 0,
    month: 0,
    year: 0,
  },
});

export const age = atom({
  key: "age",
  default: {
    day: 0,
    month: 0,
    year: 0,
  },
});
