interface SvgIconProps {
  src: string;
  width: string;
  height: string;
}

export function SvgIcon({ src, width, height }: SvgIconProps) {
  return (
    <img
      src={`/img/svg/${src}`}
      alt={src}
      width={width}
      height={height}
    />
  );
}
