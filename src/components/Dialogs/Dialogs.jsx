import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={`${s.dialog} ${s.active}`}>
          <NavLink to="/dialogs/1">Ірина</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/2">Ваня</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/3">Людмила</NavLink>
        </div>
      </div>
      <div className={s.messages}>
        <div className={s.message}>Hi</div>
        <div className={s.message}>What&apos;s up</div>
        <div className={s.message}>Yo</div>
      </div>
    </div>
  );
};

export default Dialogs;
