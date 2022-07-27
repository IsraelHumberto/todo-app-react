import React, { useContext, useState } from 'react'
import { ThemeContext } from 'styled-components';
import InputText from './InputText';
import { Container, ToDoHeader } from './styles'
import Tasks from './Tasks';

interface Props {
    themeToogler: () => void;
}

const ToDo = ({ themeToogler }: Props) => {
    const { IconToogle } = useContext(ThemeContext)

    const [tasks, setTasks] = useState([{}])


    return (
        <Container>
            <ToDoHeader>
                <div className="logo">TODO</div>
                <div className="toogle-theme">
                    <IconToogle 
                        onClick={themeToogler}
                    />
                </div>
            </ToDoHeader>
            <InputText 
                setTasks={setTasks}
            />
            <Tasks 
                tasks={tasks}
                setTasks={setTasks}
            />
        </Container>
    )
}

export default ToDo