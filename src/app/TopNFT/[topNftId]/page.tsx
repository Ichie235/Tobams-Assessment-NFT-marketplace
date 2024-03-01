import { notFound } from "next/navigation";
import { NftProjectProps, TopNFTproject } from "../../../../library/nftData";

import DynamicNftProject from "@/app/Components/DynamicRendering/DynamicRoute";

type Params = {
  params: {
    topNftId: string;
  };
};
export default function TopNftProjects({ params: { topNftId } }: Params) {
  const projectDetails: NftProjectProps | undefined = TopNFTproject.find(
    (p) => p.slug === topNftId
  );

  if (!projectDetails) {
    // Handle case when project is not found
    return notFound();
  }

  return (
    <>
      <DynamicNftProject projectDetails={projectDetails} />;
    </>
  );
}
