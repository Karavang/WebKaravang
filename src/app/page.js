import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import Line from "./components/Line";
import { MyHistoryInWeb } from "./components/MyHistoryInWeb";
import { Shetagri } from "./components/Shetagri";
import { Work } from "./components/Work";
import { MyWorks } from "./components/myWorks";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Work />
      <Line />
      <MyHistoryInWeb />
      <Line />
      <MyWorks />
    </>
  );
}
