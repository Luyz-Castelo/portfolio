import style from './Link.module.css'

type LinkProps = {
  href: string;
  children: React.ReactNode;
  target?: string;
}

export const Link = ({href, target = '_self', children}: LinkProps) => {
  return (
    <a href={href} target={target} style={style}> 
      {children}
    </a>
  );
}
