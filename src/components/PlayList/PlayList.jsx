import { FaHeart } from 'react-icons/fa';
import s from './PlayList.module.css';


const PlayList = ({singl, deleteSingl, isLikedClick}) => {

  return (
    <ul className={s.list}>
          {singl.map(({ id, title, artist, like }) => <li className={s.item} key={id}>
              <h3 className={s.title}>{title}</h3>
              <p className={s.artist}>{artist}</p> 
              <div className={s.btn_wrapper}>
                  <button
                        className={s.like}
                        type='button'
                        onClick={() => isLikedClick(id)}>
                        <FaHeart size='24px' color={like ? 'red' : 'gray'} />
                  </button>
                  <button
                        className={s.btn}
                        type='button'
                        onClick={() => deleteSingl(id)} >
                        Delete
                  </button>
                </div>
        </li>)}
    </ul>
  )
}

export default PlayList
