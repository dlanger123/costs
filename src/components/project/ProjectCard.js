import { Link } from 'react-router-dom'
import styles from './ProjectCard.module.css'

import { BsPencil, BsFillTrashFill } from 'react-icons/bs'

//function ProjectCard({name, id, budget, category, key}){
function ProjectCard(props){
    //alert({name})
    //console.log({category})

    const remove = (e) => {
        //console.log(e)        
        //props.handleRemove(props.id)
        e.preventDefault()
        console.log('teste')
        //e.stopPropagation();
        //e.nativeEvent.stopImmediatePropagation();
    }

    return(         
        <div className={styles.project_card}>
            <h4>{props.name}</h4>  
            <p>
                <span>Orçamento</span> R${props.budget}
            </p>
            <p className={styles.category_text}>
                <span className={`${styles[props.category.toLowerCase()]}`}></span> {props.category}
            </p>
            <div className={styles.project_card_actions}>
                <Link to="/">
                   <BsPencil/> Editar 
                </Link>
                <button onClick={remove}>
                    <BsFillTrashFill/> Excluir
                </button>
            </div>
        </div>
    )
}

export default ProjectCard