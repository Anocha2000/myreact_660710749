import React from 'react';

const TodoList = () => {
    // ข้อมูลที่จะแสดง
    const todos = [
        { id: 1, text: 'Mon : 📒เรียนภาษาอังกฤษ', completed: true },
        { id: 2, text: 'Tue : 🧁เรียน BIS', completed: true },
        { id: 3, text: 'Wed : 🥑เรียน Frontend & DST', completed: true },
        { id: 4, text: 'Thu : 🥕เรียน backend & AI', completed: false },
        { id: 5, text: 'Fri : 🪬ไปซื้อของใช้เข้าห้อง', completed: false },
        { id: 6, text: 'Sat : 🍇ซักผ้า ทำความสะอาดห้อง', completed: false },
        { id: 7, text: 'Sun : 🎈อ่านหนังสือทบทวนก่อนสอบ', completed: false }
    ];
 
    // คำนวณสถิติ
    const completedCount = todos.filter(todo => todo.completed).length;
    const totalCount = todos.length;
    const percentage = Math.round((completedCount / totalCount) * 100);
    
    return (
        <div style={{ maxWidth: '500px', margin: '20px auto', padding: '20px' }}>
            
            <h3>📍MY 7 Day Plan</h3>
            
            {/* Progress Bar */}
            <div style={{
                backgroundImage: 'linear-gradient(to right, #f8b8e2ff, #f9fcb3ff)',//สีพื้นหลังตรง%---ดำ
                borderRadius: '20px',
                padding: '3px',
                margin: '15px 0'
            }}>
                <div style={{
                    backgroundColor: '#e9aadfff', //ตรง%สีชมพู
                    width: `${percentage}%`,
                    textAlign: 'center',
                    borderRadius: '17px',
                    padding: '8px 0',
                    color: 'white',
                    fontWeight: 'bold',
                    transition: 'width 0.3s ease'
                }}>
                    {percentage}%
                </div>
            </div>
            
            {/* Todo Items */}
            <div style={{ margin: '20px 0' }}>
                {todos.map(todo => (
                    <div 
                        key={todo.id}
                        style={{
                            padding: '12px',
                            margin: '8px 0',
                            borderRadius: '8px',
                            border: '1px solid #ddd',
                            display: 'flex',
                            alignItems: 'center',
                            backgroundColor: todo.completed ? '#f7fbcdff' : '#ffebf8ff',
                            transition: 'all 0.3s ease'
                        }}
                    >
                        <span style={{ marginRight: '12px', fontSize: '18px' }}>
                            {todo.completed ? '✅' : '⬜'}
                        </span>
                        <span style={{
                            flex: 1,
                            textDecoration: todo.completed ? 'line-through' : 'none',
                            color: todo.completed ? '#666' : '#333'
                        }}>
                            {todo.text}
                        </span>
                    </div>
                ))}
            </div>
            <div style={{
                marginTop: '20px',
                textAlign: 'center',
                padding: '15px',
                background: 'linear-gradient(45deg, #dbea66ff, #eec1e7ff)',
                color: 'white',
                borderRadius: '8px',
                fontWeight: 'bold'
            }}>
                ✨ ทำเสร็จแล้ว {completedCount} จาก {totalCount} รายการ
            </div>

        </div>
    );
};

export default TodoList;