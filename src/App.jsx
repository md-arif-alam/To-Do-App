import React from 'react'
import TaskStore from './apis/TaskStore'
import TaskGen from './Components/TaskGen'

const App = () => {
    return (
        <section>
            <TaskStore>
                <TaskGen />
            </TaskStore>
        </section>
    )
}

export default App