type ImageProps = {
  width?: string;
  height?: string;
  src?: string;
  alt?: string;
}

export const Image = ({
  width = '36',
  src = `https://via.placeholder.com/${width}`,
  alt = '',
}: ImageProps) => {
  
  return (
    <img width={width} src={src} alt={alt} />
  );
}
