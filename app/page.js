import Image from "next/image";
import styles from "./page.module.css";
import QR from "@/components/QR/Qr";
import AgeCalculator from "@/components/AgeCalculator/AgeCalculator";
import RecoilProvider from "@/Recoil/RecoilProvider";

export default function Home() {
  return (
    <>
      <QR />
      <RecoilProvider>
        <AgeCalculator />
      </RecoilProvider>
    </>
  );
}
