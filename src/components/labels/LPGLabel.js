import React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';

const LPGLabel = props => (
  <Svg width={36} height={36} fill="none" {...props}>
    <Circle cx={18} cy={18} r={18} fill="#3360FF" />
    <Path
      d="M6.008 12.976h1.89v8.232h4.242V23H6.008V12.976zM13.486 23V12.976h3.529c.476 0 .919.08 1.33.238.42.15.784.364 1.091.644.308.28.551.616.729 1.008.177.383.265.807.265 1.274 0 .476-.088.91-.265 1.302-.178.383-.42.714-.729.994-.308.28-.671.5-1.091.658-.411.15-.854.224-1.33.224h-1.639V23h-1.89zm3.556-5.474c.495 0 .868-.14 1.12-.42a1.418 1.418 0 0 0 .28-1.484 1.026 1.026 0 0 0-.28-.434 1.254 1.254 0 0 0-.461-.308 1.765 1.765 0 0 0-.659-.112h-1.666v2.758h1.667zm9.353-.028h4.914a4.085 4.085 0 0 1 .098.882c0 .644-.098 1.25-.294 1.82a4.217 4.217 0 0 1-.924 1.526 4.637 4.637 0 0 1-1.61 1.106c-.625.261-1.34.392-2.142.392-.728 0-1.414-.13-2.058-.392a5.122 5.122 0 0 1-2.814-2.744 5.21 5.21 0 0 1-.42-2.1c0-.756.14-1.451.42-2.086a5.22 5.22 0 0 1 1.134-1.666 5.122 5.122 0 0 1 1.68-1.092 5.421 5.421 0 0 1 2.058-.392c.812 0 1.535.14 2.17.42.644.28 1.195.667 1.652 1.162l-1.302 1.274a3.38 3.38 0 0 0-1.092-.784c-.401-.187-.882-.28-1.442-.28-.457 0-.891.084-1.302.252-.41.159-.77.387-1.078.686a3.374 3.374 0 0 0-.742 1.092c-.177.42-.266.891-.266 1.414 0 .523.089.999.266 1.428.187.42.434.78.742 1.078.317.299.681.532 1.092.7.41.159.85.238 1.316.238.532 0 .98-.075 1.344-.224.373-.159.69-.36.952-.602.187-.168.345-.378.476-.63.14-.261.247-.55.322-.868h-3.15v-1.61z"
      fill="#fff"
    />
  </Svg>
);

export default LPGLabel;