import styles from '../project/ProjectCard.module.css'
import {BsFillTrashFill} from 'react-icons/bs'

//function ServiceCard({id, key, name, cost, description, handleRemove}){
    function ServiceCard(props){

    const remove = (e) => {
        e.preventDefault()
        props.handleRemove(props.id, props.cost)
    } 

    return (
        <div className={styles.project_card}>
            <h4>{props.name}</h4>
            <p>
                <span>Custo total:</span> R${props.cost}
            </p>
            <p>{props.description}</p>
            <div className={styles.project_card_actions}>
                <button onClick={remove}>
                    <BsFillTrashFill />
                    Excluir
                </button>
            </div>
        </div>
    )
}

export default ServiceCard