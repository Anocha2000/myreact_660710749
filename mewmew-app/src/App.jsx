import React from 'react';
import ComponentExamples from './components/ComponentExamples';
import './App.css';

function App() {
    return (
        <div className="App" style={{ backgroundImage: 'linear-gradient(to bottom, #ecd1e8ff, #ffffffff)',
    minHeight: '100vh'}}>
            <ComponentExamples />
        </div>
    );
}

export default App;