import { ReactNode } from "react";

type EllipseProps = {
  children?: ReactNode;
  className?: string;
};

function EllipseLarge(props: EllipseProps) {
  return (
    <svg
      width={994}
      height={941}
      viewBox="0 0 994 941"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      <ellipse
        opacity="0.7"
        cx="497"
        cy="496.5"
        rx="495"
        ry="494.5"
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

export default EllipseLarge;
