"use client";
import EllipseCover from "../../../../../svg/EllipseCover";
import EllipseExtraLarge from "../../../../../svg/EllipseExtraLarge";
import EllipseExtraSmall from "../../../../../svg/EllipseExtraSmall";
import EllipseGrandParent from "../../../../../svg/EllipseGrandParent";
import EllipseLarge from "../../../../../svg/EllipseLarge";
import EllipseMainCover from "../../../../../svg/EllipseMainCover";
import EllipseMedium from "../../../../../svg/EllipseMedium";
import EllipseMediumTwo from "../../../../../svg/EllipseMediumTwo";
import EllipseParent from "../../../../../svg/EllipseParent";
import EllipseSmall from "../../../../../svg/EllipseSmall";

export default function EllipseRing() {
  return (
    <main className="w-full relative flex flex-col items-center">
      <EllipseMainCover className="absolute" />
      <EllipseCover className="absolute " />
      <EllipseGrandParent className="absolute" />
      <EllipseParent className="absolute top-20" />
      <EllipseExtraLarge  className="absolute top-40"/>
      <EllipseLarge  className="absolute top-60"/>
      <EllipseMedium className="absolute top-80"/>
      <EllipseMediumTwo  className="absolute top-[25rem]"/>
      <EllipseSmall  className="absolute top-[30rem]"/>
      <EllipseExtraSmall></EllipseExtraSmall>
    </main>
  );
}
