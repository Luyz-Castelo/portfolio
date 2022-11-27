import GithubIcon from '../Icons/GithubIcon/GithubIcon'
import style from './Header.module.css'
import Link from '../Link/Link'

const Header = ({className}: any) => {

  return (
    <div className={className}>
      <a href='https://github.com/Luyz-Castelo' target='blank'>
        <GithubIcon />
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
    </div>
  );
}

export default Header
