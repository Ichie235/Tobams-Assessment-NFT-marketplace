import { ReactNode } from "react";

type EllipseProps = {
  children?: ReactNode;
  className?: string;
};

function EllipseMainCover(props: EllipseProps) {
  return (
    <svg
      width={1920}
      height={1191}
      viewBox="0 0 1920 1191"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      <path
        opacity="0.1"
        d="M1936.5 746.5C1936.5 1285.53 1499.31 1722.5 960 1722.5C420.693 1722.5 -16.5 1285.53 -16.5 746.5C-16.5 207.471 420.693 -229.5 960 -229.5C1499.31 -229.5 1936.5 207.471 1936.5 746.5Z"
        fill="#0D0F2B"
        stroke="#262840"
        stroke-width="3"
      />

      {props.children}
    </svg>
  );
}

export default EllipseMainCover;
