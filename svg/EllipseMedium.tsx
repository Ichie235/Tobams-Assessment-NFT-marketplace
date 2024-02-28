import { ReactNode } from "react";

type EllipseProps = {
  children?: ReactNode;
  className?: string;
};

function EllipseMedium(props: EllipseProps) {
  return (
    <svg
      width={818}
      height={817}
      viewBox="0 0 818 817"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      <path
        opacity="0.8"
        d="M816.5 408.5C816.5 633.278 634.058 815.5 409 815.5C183.942 815.5 1.5 633.278 1.5 408.5C1.5 183.722 183.942 1.5 409 1.5C634.058 1.5 816.5 183.722 816.5 408.5Z"
        fill="#0D0F2B"
        stroke="#262840"
        stroke-width="3"
      />

      {props.children}
    </svg>
  );
}

export default EllipseMedium;
