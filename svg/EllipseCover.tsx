import { ReactNode } from "react";

type EllipseProps = {
  children?: ReactNode;
  className?: string;
};

function EllipseCover(props: EllipseProps) {
  return (
    <svg
      width={1632}
      height={1191}
      viewBox="0 0 1632 1191"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      <path
        opacity="0.3"
        d="M1630.5 746.5C1630.5 1196.06 1265.84 1560.5 816 1560.5C366.163 1560.5 1.5 1196.06 1.5 746.5C1.5 296.941 366.163 -67.5 816 -67.5C1265.84 -67.5 1630.5 296.941 1630.5 746.5Z"
        fill="#0D0F2B"
        stroke="#262840"
        stroke-width="3"
      />

      {props.children}
    </svg>
  );
}

export default EllipseCover;
