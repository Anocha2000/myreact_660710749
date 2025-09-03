import React from 'react';
import UserCard from './UserCard';
import TodoList from './TodoList';

function ComponentExamples() {
    return (
        <div style={{
            maxWidth: '800px',
            margin: '0 auto',
            padding: '20px',
            fontFamily: 'Arial, sans-serif'
            
        }}>
            <h1 style={{
                textAlign: 'center',
                color: '#000000ff',
                marginBottom: '40px'

                
            }}>
                WELCOME !
            </h1>
        
      
            <section style={{
                marginBottom: '40px',
                padding: '20px',
                border: '1px solid #efeebbff',
                borderRadius: '8px',
                backgroundColor: '#f8ecceff'// เปลี่ยนสีพื้นหลังเตรงprofile
            }}>
                <h2 style={{ color: '#ed8edfff', marginBottom: '20px' }}>
                    PROFILE
                </h2>
                <UserCard />
            </section>
            
            <section style={{
                marginBottom: '40px',
                padding: '20px',
                border: '1px solid #eee',
                borderRadius: '8px',
                backgroundColor: '#f8ecceff' //ตรงmy 7 day plan อันใหญ่
            }}>
                <h2 style={{ color: '#333', marginBottom: '20px' }}>
                    
                </h2>
                <TodoList />
            </section>
        </div>
    );
}

export default ComponentExamples;