import { calculateOverrideValues } from "next/dist/server/font-utils";
import styles from "./ageCalculator.module.css";
import Form from "./Form/Form";
import AgeResults from "./AgeResults/AgeResults";

export default function AgeCalculator() {
  return (
    <>
      <section>
        <h1>AgeCalculator</h1>
        <div>
          <Form />
          <AgeResults />
        </div>
      </section>
    </>
  );
}
