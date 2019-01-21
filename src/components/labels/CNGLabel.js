import React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';

const CNGLabel = props => (
  <Svg width={36} height={36} fill="none" {...props}>
    <Circle cx={18} cy={18} r={18} fill="#FF377F" />
    <Path
      d="M12.772 21.39a5.06 5.06 0 0 1-1.75 1.372c-.672.308-1.423.462-2.254.462a5.328 5.328 0 0 1-2.086-.406 5.187 5.187 0 0 1-1.652-1.106 5.187 5.187 0 0 1-1.106-1.652 5.293 5.293 0 0 1-.406-2.072c0-.737.135-1.423.406-2.058.27-.644.64-1.2 1.106-1.666a5.187 5.187 0 0 1 1.652-1.106 5.328 5.328 0 0 1 2.086-.406c.803 0 1.507.14 2.114.42.616.28 1.162.686 1.638 1.218l-1.33 1.288a3.522 3.522 0 0 0-1.036-.826c-.383-.205-.84-.308-1.372-.308-.467 0-.905.084-1.316.252-.41.159-.77.387-1.078.686a3.31 3.31 0 0 0-.714 1.092c-.177.42-.266.891-.266 1.414 0 .523.089.999.266 1.428.177.42.415.78.714 1.078.308.299.667.532 1.078.7.41.159.85.238 1.316.238.56 0 1.055-.112 1.484-.336.439-.233.826-.56 1.162-.98l1.344 1.274zm1.517-8.414h2.198l4.032 6.72h.112l-.112-1.932v-4.788h1.876V23h-1.988l-4.256-7.098h-.112l.112 1.932V23H14.29V12.976zm14.74 4.522h4.915a4.063 4.063 0 0 1 .098.882c0 .644-.098 1.25-.294 1.82a4.217 4.217 0 0 1-.924 1.526 4.636 4.636 0 0 1-1.61 1.106c-.626.261-1.34.392-2.142.392-.728 0-1.414-.13-2.058-.392a5.122 5.122 0 0 1-2.814-2.744 5.21 5.21 0 0 1-.42-2.1c0-.756.14-1.451.42-2.086a5.22 5.22 0 0 1 1.134-1.666 5.122 5.122 0 0 1 1.68-1.092 5.421 5.421 0 0 1 2.058-.392c.812 0 1.535.14 2.17.42.644.28 1.194.667 1.652 1.162l-1.302 1.274a3.377 3.377 0 0 0-1.092-.784c-.402-.187-.882-.28-1.442-.28-.458 0-.892.084-1.302.252-.41.159-.77.387-1.078.686a3.375 3.375 0 0 0-.742 1.092c-.178.42-.266.891-.266 1.414 0 .523.088.999.266 1.428.186.42.434.78.742 1.078.317.299.681.532 1.092.7.41.159.85.238 1.316.238.532 0 .98-.075 1.344-.224.373-.159.69-.36.952-.602.186-.168.345-.378.476-.63.14-.261.247-.55.322-.868h-3.15v-1.61z"
      fill="#fff"
    />
  </Svg>
);

export default CNGLabel;
