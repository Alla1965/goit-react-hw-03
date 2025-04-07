import css from './Contact.module.css';

export default function Contact({ data: { id, name, number }, onDelete }) {
  return (
    <div className={css.container}>
      <div className={css.textContact}>
        
        <div className={css.contactItem}>
           <svg className={css.icon}>
    
          <use href="../../../image/icoms/symbol-defs.svg#icon-user"></use>
</svg>
        <p className={css.text}>{name}</p>
        </div>
       
        <div className={css.contactItem}>
         <svg className={css.icon}>
    
          <use className={css.icon} href="../../../image/icoms/symbol-defs.svg#icon-phone"></use>
</svg>
          <p className={css.text}>{number}</p>  
</div>
       
      </div>
         
          
      <button className={css.btn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}