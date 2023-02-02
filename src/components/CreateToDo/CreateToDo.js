import React,{ useState,memo} from "react";
import { v4 as uuidv4 }       from 'uuid';
import './CreateToDo.scss';


const CreateToDo = memo(({setToDo,todo,fontColor,value,setValue}) => {

    
    const [color,setColor]   = useState('#323232');
    

    const addToDo = () => {
        setToDo([{
            id:uuidv4(),
            title:value,
            status:false,
      }, ...todo])
      
      setValue('');
      setColor('#323232')
    }

    
    const onSubmit = () => {
        if(value.length < 4){
            setColor('red')
        }else{
            setColor('#323232')
        }
    }
    
        return(
            <div className="addTask">
                        <input 
                            style={{borderColor:color,color:fontColor}}
                            maxLength='80'
                            type='text'
                            value={value}
                            onChange={e => setValue(e.target.value)}
                            onKeyDown={e => e.key === 'Enter' && value.length >= 5 ? addToDo(value) : onSubmit()}
                            placeholder='Add a task'/>
                        <h3 style={{color:'#323232'}}>No less than 5 symbols</h3>
                        <button onClick={value.length >= 5 ? addToDo : null} className="addButton">Add</button>
            </div>
            
    )
        
})



export default CreateToDo;