import { useState }  from 'react';
import CreateToDo    from '../components/CreateToDo/CreateToDo'
import ToDoList      from '../components/ToDoList/ToDoList';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
import Settings      from '../components/Settings/Settings';

const MainPage = ({fontColor,todo,setToDo,completed,setCompleted,setActive}) => {

    const [value,setValue] = useState('');

   
return(
    <>
    <div>
    
      <ErrorBoundary>
            <Settings setActive={setActive}/>
      </ErrorBoundary>
      

        <ErrorBoundary>
              <ToDoList todo={todo} 
                     setToDo={setToDo}   
                   completed={completed} 
                setCompleted={setCompleted}/>
        </ErrorBoundary>
            
        <ErrorBoundary>
            <CreateToDo todo={todo} 
                     setToDo={setToDo} 
                       value={value} 
                    setValue={setValue}        
                   fontColor={fontColor} />
        </ErrorBoundary>
            
    </div>
    </>
)}

export default MainPage;