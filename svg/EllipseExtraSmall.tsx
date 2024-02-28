import { ReactNode } from "react";

type EllipseProps = {
  children?: ReactNode;
  className?: string;
};

function EllipseExtraSmall(props: EllipseProps) {
  return (
    <svg
      width={306}
      height={305}
      viewBox="0 0 306 305"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      <ellipse
        cx="153"
        cy="152.5"
        rx="151"
        ry="150.5"
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

export default EllipseExtraSmall;
