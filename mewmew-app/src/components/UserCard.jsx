import React from 'react';

// Component ย่อยๆ
const Avatar = () => (
    <img 
        src="https://cdn.readawrite.com/articles/8902/8901770/thumbnail/large.gif?2"
         alt="User Avatar"
        style={{
            borderRadius: '50%',
            width: '50px',
            height: '50px',
            border: '2px solid #f8f5dbff'
        }}
    />
);

const UserName = () => (
    <h3 style={{ color: '#fbaffaff', margin: '10px 0' }}>
        Anocha Thongduang
    </h3>
);

const UserBio = () => (
    <p style={{ color: '#4e4e4eff', fontSize: '15px' }}>
        นักศึกษาผู้นอนน้อย
    </p>
);

// Component หลักที่ประกอบจาก components ย่อย
const UserCard = () => {
    return (
        <div style={{
            border: '1px solid #ecd571ff',
            padding: '20px',
            borderRadius: '12px',
            textAlign: 'center',
            backgroundColor: '#f7ecaeff',
            maxWidth: '300px',
            margin: '20px auto'
        }}>
            <Avatar />
            <UserName />
            <UserBio />
        </div>
    );
};

export default UserCard;