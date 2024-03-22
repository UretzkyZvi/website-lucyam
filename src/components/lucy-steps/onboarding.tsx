import * as React from "react"
import { SVGProps } from "react"
const Onboarding = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 409 307"
    fill="none"
    {...props}
  >
    <rect width={409} height={307} fill="#F5FAFA" rx={10} />
    <rect width={111} height={41} x={22} y={25} fill="#fff" rx={10} />
    <rect width={268} height={122} x={22} y={82} fill="#fff" rx={10} />
    <rect
      width={111}
      height={37}
      x={179}
      y={233}
      fill="#2F2369"
      fillOpacity={0.53}
      rx={10}
    />
    <path
      fill="#54BD95"
      stroke="#fff"
      strokeWidth={2}
      d="M325.5 115.263 374.956 143 325.5 170.737v-55.474Z"
    />
  </svg>
)
export default Onboarding
