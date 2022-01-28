import styles from './Select.module.css'

function Select({text, name, options, handleOnChange, value}){
    return(
        <div className={styles.form_control}>
           <label htmlFor={name}>{text}: </label>
           <select 
                name={name} 
                id={name} 
                onChange={handleOnChange}
                //value={value || ''}
            >
            <option defaultValue={'DEFAULT'}>Selecione uma opção</option>
            {options.map((option, index) => (
                <option key={index} value={option.id}>
                    {option.name}
                </option>
            ))}
            </select>
        </div>
    )
}

export default Select