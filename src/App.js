import React from 'react';

import { TodoInputBox, TodoList, FilterSelect } from 'components';

function App() {
    return (
        <div className="App">
            <TodoInputBox />
            <TodoList />
            <FilterSelect />
        </div>
    );
}

export default App;
