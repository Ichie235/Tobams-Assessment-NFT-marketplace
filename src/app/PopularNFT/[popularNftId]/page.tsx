import { notFound } from "next/navigation";
import Image from "next/image";
import {
  NftProjectProps,
  PopularNFTproject,
} from "../../../../library/nftData";
import DynamicNftProject from "@/app/Components/DynamicRendering/DynamicRoute";

type Params = {
  params: {
    popularNftId: string;
  };
};
export default function PopularNftProjects({ params: { popularNftId } }: Params) {
  const projectDetails: NftProjectProps | undefined = PopularNFTproject.find(
    (p) => p.slug === popularNftId
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
