import { ReactNode } from "react";

type EllipseProps = {
  children?: ReactNode;
  className?: string;
};

function EllipseGrandParent(props: EllipseProps) {
  return (
    <svg
      width={1472}
      height={1180}
      viewBox="0 0 1472 1180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      <ellipse
        opacity="0.4"
        cx="736"
        cy="735.5"
        rx="734"
        ry="733.5"
        fill="#0D0F2B"
        stroke="#262840"
        stroke-width="3"
        stroke-miterlimit="4.62023"
        stroke-linecap="round"
        stroke-dasharray="35 50 15 15"
      />

      {props.children}
    </svg>
  );
}

export default EllipseGrandParent;
