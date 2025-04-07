import css from './SearchBox.module.css';
export default function SearchBox({ value, onFilter }) {
    console.log(value);
    
  return (
    <div>
      <p className={css.label}>Find contact by name</p>
      <input className={css.filterInput}
              type="text"
        value={value}
        onChange={(e) => onFilter(e.target.value)}
      />
    </div>
  );
}
