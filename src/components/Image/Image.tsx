const GithubIcon = ({
  width = '30',
  height = '30',
  src = `https://via.placeholder.com/${width}`,
}: any) => {
  
  return (
    <img src={src} width={width} height={height} />
  );
}

export default GithubIcon
