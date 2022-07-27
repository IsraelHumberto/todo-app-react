import React, { useState } from 'react'
import { Container } from './styles'

interface Props {
    setTasks: React.Dispatch<React.SetStateAction<{}[]>>
}

const InputText = ({setTasks}: Props) => {
    const [input, setInput] = useState('')

    const sendTask = () => {
        if(input !== '') {
            setTasks(prev => [...prev, {name: input, state: 'active'} ])
            setInput('')
        }
    }

  return (
    <Container
        value = {input}
        placeholder= 'Create a new todo...'
        onChange={(e: any) => {
            e.preventDefault()
            setInput(e.target.value)
        }
    }
        onKeyPress={(e: any) => {
            e.key === 'Enter' && sendTask()
        }
    }
    >

    </Container>
  )
}

export default InputText