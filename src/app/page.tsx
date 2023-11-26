import Image from "next/image";
import { getHomepageData } from "../fetches/getHomepageData";
import RenderBlocks from "../components/RenderBlock/RenderBlock";

export default async function Home() {
  const data = await getHomepageData();
  return <RenderBlocks blocks={data.content} />;
}
