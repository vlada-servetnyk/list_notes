import s from './ListNotes.module.css';


const ListNotes = ({notes, deleteNote}) => {
    return (
    <ul className={s.list}>
        {notes.map(item => <li className={s.item} key={item.id}>
            {item.name}
            <button className={s.btn_del}
                onClick={() => deleteNote(item.id)}
                type="button">Delete</button>
            </li>)}
    </ul>
    )
};

export default ListNotes;