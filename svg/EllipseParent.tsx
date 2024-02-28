import { ReactNode } from "react";

type EllipseProps = {
  children?: ReactNode;
  className?: string;
};

function EllipseParent(props: EllipseProps) {
  return (
    <svg
      width={1302}
      height={1095}
      viewBox="0 0 1302 1095"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      <path
        opacity={0.5}
        d="M1300.5 650.5c0 358.43-290.79 649-649.5 649S1.5 1008.93 1.5 650.5c0-358.432 290.79-649 649.5-649s649.5 290.568 649.5 649z"
        fill="#0D0F2B"
        stroke="#262840"
        strokeWidth={3}
      />
      {props.children}
    </svg>
  );
}

export default EllipseParent;
