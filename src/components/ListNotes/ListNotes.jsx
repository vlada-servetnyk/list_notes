
import s from './ListNotes.module.css';


const ListNotes = ({ notes, deleteNote }) => {
    
    return (
    <ul className={s.list}>
            {notes.map(item => <li className={s.item} key={item.id}>
                {item.name}
            <div className={s.btn_wrapper}>
                {/* <button className={s.btn}>Edit</button> */}
                <button className={s.btn}
                    onClick={() => deleteNote(item.id)}
                    type="button">Delete</button>
            </div>
        </li>)}
    </ul>
    )
};

export default ListNotes;