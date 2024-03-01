import { ReactNode } from "react";

type HeartIconProps = {
  children?: ReactNode;
  className?: string;
};

function HeartIcon(props: HeartIconProps) {
  return (
    <svg
      width={56}
      height={56}
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      <circle cx="28" cy="28" r="27.5" fill="#060714" stroke="#262840" />
      <path
        d="M23.8327 20.5C21.5318 20.5 19.666 22.3467 19.666 24.625C19.666 26.4642 20.3952 30.8292 27.5727 35.2417C27.7013 35.3199 27.8489 35.3613 27.9993 35.3613C28.1498 35.3613 28.2974 35.3199 28.426 35.2417C35.6035 30.8292 36.3327 26.4642 36.3327 24.625C36.3327 22.3467 34.4668 20.5 32.166 20.5C29.8652 20.5 27.9993 23 27.9993 23C27.9993 23 26.1335 20.5 23.8327 20.5Z"
        fill="#FB4539"
      />

      {props.children}
    </svg>
  );
}

export default HeartIcon;