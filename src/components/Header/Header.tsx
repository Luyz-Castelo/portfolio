import Image from '../Image/Image'
import GithubImage from '../../public/GithubImage.png'
import style from './Header.module.css'
import Link from '../Link/Link'

const Header = () => {

  return (
    <header className={style.header}>
      <a href='https://github.com/Luyz-Castelo' target='blank'>
        <Image src={GithubImage} />
      </a>
      <div>
        Luyz Castelo Branco
        <div className={style.pages}>
          <Link link='https://github.com/Luyz-Castelo' text='Github' />
          <Link link='https://github.com/Luyz-Castelo' text='Github' />
          <Link link='https://github.com/Luyz-Castelo' text='Github' />
          <Link link='https://github.com/Luyz-Castelo' text='Github' />
        </div>
      </div>
    </header>
  );
}

export default Header
