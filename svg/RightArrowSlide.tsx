import { ReactNode } from "react";

type ArrowSlideProps = {
  children?: ReactNode;
  className?: string;
};

function RightArrowSlide(props: ArrowSlideProps) {
  return (
    <svg
      width={270}
      height={270}
      viewBox="0 0 270 270"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_bd_4_3729)">
        <circle
          cx="135"
          cy="110"
          r="60"
          fill="#262840"
          fill-opacity="0.8"
          shape-rendering="crispEdges"
        />
      </g>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M138.06 112.939L133.651 117.695C133.274 118.101 132.662 118.102 132.284 117.697C131.906 117.292 131.905 116.634 132.282 116.227L136.694 111.469C137.065 111.073 137.268 110.549 137.267 109.991C137.267 109.433 137.063 108.91 136.695 108.517L132.283 103.774C131.906 103.368 131.906 102.71 132.283 102.304C132.661 101.899 133.272 101.899 133.65 102.304L138.059 107.044C138.793 107.827 139.199 108.874 139.2 109.989C139.201 111.105 138.796 112.153 138.06 112.939Z"
        fill="white"
      />
      <defs>
        <filter
          id="filter0_bd_4_3729"
          x="0"
          y="0"
          width="270"
          height="270"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="3.5" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_4_3729"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="25" />
          <feGaussianBlur stdDeviation="37.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0235294 0 0 0 0 0.027451 0 0 0 0 0.0784314 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_backgroundBlur_4_3729"
            result="effect2_dropShadow_4_3729"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_4_3729"
            result="shape"
          />
        </filter>
      </defs>

      {props.children}
    </svg>
  );
}

export default RightArrowSlide;
