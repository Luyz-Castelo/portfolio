import GithubImage from '../../public/GithubImage.png'
import style from './Header.module.css'
import { Image } from './Image/Image'
import { Link } from '../Link/Link'

export const Header = () => {

  return (
    <header className={style.header}>
      <Link href='https://github.com/Luyz-Castelo' target='blank' >
        <Image src={GithubImage} width='62' />
      </Link>
      <div>
        Luyz Castelo Branco
        <div className={style.pages}>
          <Link href='https://github.com/Luyz-Castelo'>Github</Link>
          <Link href='https://github.com/Luyz-Castelo'>Github</Link>
          <Link href='https://github.com/Luyz-Castelo'>Github</Link>
          <Link href='https://github.com/Luyz-Castelo'>Github</Link>
        </div>
      </div>
    </header>
  );
}
