import { ReactNode } from "react";

type EllipseProps = {
  children?: ReactNode;
  className?: string;
};

function EllipseSmall(props: EllipseProps) {
  return (
    <svg
      width={450}
      height={449}
      viewBox="0 0 450 449"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      <path
        d="M448.5 224.5C448.5 347.656 348.439 447.5 225 447.5C101.561 447.5 1.5 347.656 1.5 224.5C1.5 101.344 101.561 1.5 225 1.5C348.439 1.5 448.5 101.344 448.5 224.5Z"
        fill="#060714"
        stroke="#262840"
        stroke-width="3"
      />

      {props.children}
    </svg>
  );
}

export default EllipseSmall;
