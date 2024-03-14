"use client";
import styles from "./form.module.css";
import Input from "../Input/Input";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { age, dates } from "@/Recoil/atoms/Dates";

export default function Form() {
  const setAges = useSetRecoilState(age);
  const setDates = useSetRecoilState(dates);
  const [formData, setFormData] = useState({
    day: "",
    month: "",
    year: "",
  });
  const [errors, setErrors] = useState({
    day: "",
    month: "",
    year: "",
  });
  const [color, setColor] = useState(false);
  const validateForm = ({ day, month, year }) => {
    day = Number(day);
    month = Number(month);
    year = Number(year);
    const errors = {
      day: "",
      month: "",
      year: "",
    };

    const today = new Date();
    const todayYear = today.getFullYear();
    const todayMonth = today.getMonth() + 1;
    const todayDay = today.getDate();

    var monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0)) {
      monthLength[1] = 29;
    }

    if (day > todayDay && month >= todayMonth && year >= todayYear) {
      errors.day = "Must be a Valid Day";
      errors.month = "Must be a Valid Month";
      errors.year = "Must be a Valid Year";
    }

    if (month > 12 || month < 1) {
      errors.month = "Must be a Valid Month";
    }
    if (day > 31 || day < 1) {
      errors.day = "Must be a Valid Day";
    } else if (
      month > 0 &&
      month < 13 &&
      !(day > 0 && day <= monthLength[month - 1])
    ) {
      errors.day = "Must be a valid Day";
    }
    if (year > todayYear) {
      errors.year = "Must be a valid Year";
    }
    setErrors(errors);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setColor(true);
    setErrors({
      day: "",
      month: "",
      year: "",
    });
    if (formData.day && formData.month && formData.year) {
      validateForm(formData);
    } else {
      const fieldErrors = {};
      ["day", "month", "year"].forEach((field) => {
        if (!formData[field]) {
          fieldErrors[field] = "This field is required";
        }
      });
      setErrors((prevState) => ({
        ...prevState,
        ...fieldErrors,
      }));
    }
    if (!errors.day && !errors.month && !errors.year) {
      setDates((prev) => ({
        ...prev,
        formData,
      }));
      const calculateAge = (day, month, year) => {
        const today = new Date();
        const birthDate = new Date(year, month - 1, day); // Restamos 1 al mes porque los meses van de 0 a 11 en JavaScript
        let ageYears = today.getFullYear() - birthDate.getFullYear();
        let ageMonths = today.getMonth() - birthDate.getMonth();
        let ageDays = today.getDate() - birthDate.getDate();

        // Ajustar edad si el mes de nacimiento es mayor que el mes actual
        if (
          ageMonths < 0 ||
          (ageMonths === 0 && today.getDate() < birthDate.getDate())
        ) {
          ageYears--;
          ageMonths += 12;
        }

        // Ajustar edad si el día de nacimiento es mayor que el día actual
        if (ageDays < 0) {
          const prevMonthLastDay = new Date(
            today.getFullYear(),
            today.getMonth(),
            0
          ).getDate();
          ageMonths--;
          ageDays = prevMonthLastDay - birthDate.getDate() + today.getDate();
        }
        setAges((prev) => ({
          ...prev,
          year: ageYears,
          month: ageMonths,
          day: ageDays,
        }));
      };
      if (formData.day && formData.month && formData.year) {
        calculateAge(
          Number(formData.day),
          Number(formData.month),
          Number(formData.year)
        );
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <Input
          name="day"
          value={formData.day}
          onChange={handleInputChange}
          error={errors.day}
        />
        <Input
          name="month"
          value={formData.month}
          onChange={handleInputChange}
          error={errors.month}
        />
        <Input
          name="year"
          value={formData.year}
          onChange={handleInputChange}
          error={errors.year}
        />
      </form>
      <hr></hr>
      <button
        className={
          color ? `${styles.button} ${styles.color}` : `${styles.button}`
        }
        onClick={handleSubmit}
      >
        Calculate
      </button>
    </div>
  );
}
