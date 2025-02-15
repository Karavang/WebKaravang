import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import Line from "./components/Line";
import { MyHistoryInWeb } from "./components/MyHistoryInWeb";
import { MyWorks } from "./components/MyWorks";
import { Work } from "./components/Work";

export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <Hero />
      <Work />
      <Line />
      <MyHistoryInWeb />
      <Line />
      <MyWorks />
    </>
  );
}
