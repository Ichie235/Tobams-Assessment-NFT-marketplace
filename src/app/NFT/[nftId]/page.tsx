import { notFound } from "next/navigation";
import { NftLatestproject, NftProjectProps} from "../../../../library/nftData";

import DynamicNftProject from "@/app/Components/DynamicRendering/DynamicRoute";

type Params = {
  params: {
    nftId: string;
  };
};
export default function NftProjects({ params: { nftId } }: Params) {
  const projectDetails: NftProjectProps | undefined = NftLatestproject.find(
    (p) => p.slug === nftId
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
