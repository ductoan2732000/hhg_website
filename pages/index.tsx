import type { NextPage } from "next";
import HomeContent from "@/components/home/index";

const Home: NextPage = () => {
  const a = () => {
    console.log("🚀 ~ file: index.tsx ~ line 9 ~ a ~ a", a);
  };
  return (
    <div>
      <HomeContent></HomeContent>
    </div>
  );
};

export default Home;
