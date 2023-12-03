import Image from "next/image";
import { Header } from "./components/Header";
import Line from "./components/Line";
import { Hero } from "./components/Hero";
import { Work } from "./components/Work";
import { MyHistoryInWeb } from "./components/MyHistoryInWeb";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Work />
      <Line />
      <MyHistoryInWeb />
    </>
  );
}
