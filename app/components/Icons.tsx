export const YouTubeIcon = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={"2rem"}
    height={"2rem"}
    style={{
      fill: "#000",
    }}
    viewBox="0 0 256 256"
    {...props}
  >
    <path
      fill="#ff3d00"
      strokeMiterlimit={10}
      d="M21.582 6.186a2.506 2.506 0 0 0-1.768-1.768C18.254 4 12 4 12 4s-6.254 0-7.814.418c-.86.23-1.538.908-1.768 1.768C2 7.746 2 12 2 12s0 4.254.418 5.814c.23.86.908 1.538 1.768 1.768C5.746 20 12 20 12 20s6.254 0 7.814-.418a2.504 2.504 0 0 0 1.768-1.768C22 16.254 22 12 22 12s0-4.254-.418-5.814zM10 14.598V9.402a.5.5 0 0 1 .75-.433l4.5 2.598a.5.5 0 0 1 0 .866l-4.5 2.598a.5.5 0 0 1-.75-.433z"
      fontFamily="none"
      fontSize="none"
      fontWeight="none"
      style={{
        mixBlendMode: "normal",
      }}
      textAnchor="none"
      transform="scale(10.66667)"
    />
  </svg>
);

export const PlayButton = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="#fff">
      <path
        fillRule="evenodd"
        d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 2c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11Z"
        clipRule="evenodd"
      />
      <path d="m16 12-6 4.33V7.67L16 12Z" />
    </g>
  </svg>
);
