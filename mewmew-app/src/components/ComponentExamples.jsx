import React from 'react';
import UserCard from './UserCard';
import TodoList from './TodoList';

function ComponentExamples() {
    return (
        <div style={{
            maxWidth: '700px',
            margin: '0 auto',
            padding: '20px',
            fontFamily: 'Arial, sans-serif'
            
        }}>
            <h1 style={{
                textAlign: 'center',
                color: '#fed0f7ff',
                marginBottom: '40px'

                
            }}>
                WELCOME !
            </h1>
        
      
            <section style={{
                marginBottom: '40px',
                padding: '20px',
                border: '1px solid #eee',
                borderRadius: '8px',
                backgroundColor: '#f2dbf3ff'
            }}>
                <h2 style={{ color: '#ffffffff', marginBottom: '20px' }}>
                    PROFILE
                </h2>
                <UserCard />
            </section>
            
            <section style={{
                marginBottom: '40px',
                padding: '20px',
                border: '1px solid #eee',
                borderRadius: '8px',
                backgroundColor: '#f8ecceff'
            }}>
                <h2 style={{ color: '#333', marginBottom: '20px' }}>
                    WEEK5
                </h2>
                <TodoList />
            </section>
        </div>
    );
}

export default ComponentExamples;