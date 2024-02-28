import { ReactNode } from "react";

type EllipseProps = {
  children?: ReactNode;
  className?: string;
};

function EllipseMediumTwo(props: EllipseProps) {
  return (
    <svg
      width={634}
      height={633}
      viewBox="0 0 634 633"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      <ellipse
        opacity="0.9"
        cx="317"
        cy="316.5"
        rx="315"
        ry="314.5"
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

export default EllipseMediumTwo;
