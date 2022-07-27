import React from 'react'
import { List } from './styles';

interface Props {
    tasks: {}[];
    setTasks: React.Dispatch<React.SetStateAction<{}[]>>
}

const Tasks = ({tasks, setTasks} : Props) => {
  return (
    <List>
        {tasks.map((task: any, index: number) => (
            <li 
                key={index}
                // onClick={() => setTasks(task.state = 'completed')}    
            >
                {task.name}
                {task.state}
            </li>
        ))}
    </List>
  )
}

export default Tasks