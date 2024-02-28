import { ReactNode } from "react";

type EllipseProps = {
  children?: ReactNode;
  className?: string;
};

function EllipseExtraLarge(props: EllipseProps) {
  return (
    <svg
      width={1144}
      height={1016}
      viewBox="0 0 1144 1016"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      <path
        opacity="0.6"
        d="M1142.5 571.5C1142.5 886.301 887.08 1141.5 572 1141.5C256.92 1141.5 1.5 886.301 1.5 571.5C1.5 256.699 256.92 1.5 572 1.5C887.08 1.5 1142.5 256.699 1142.5 571.5Z"
        fill="#0D0F2B"
        stroke="#262840"
        strokeWidth={3}
      />
      {props.children}
    </svg>
  );
}

export default EllipseExtraLarge;
