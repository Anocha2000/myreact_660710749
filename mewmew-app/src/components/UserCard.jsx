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
    <h3 style={{ color: '#9e7e9dff', margin: '10px 0' }}>
        Anocha Thongduang
    </h3>
);

const UserBio = () => (
    <><p style={{ color: '#4e4e4eff', fontSize: '15px' }}>
        นักศึกษาชั้นปีที่ 3 สาขาเทคโนโลยีสารสนเทศ มหาวิทยาลัยศิลปากร
    </p><p style={{ color: '#4e4e4eff', fontSize: '15px' }}>
        ชอบนอนเป็นชีวิตจิตใจ 
    </p></>
    
);

// Component หลักที่ประกอบจาก components ย่อย
const UserCard = () => {
    return (
        <div style={{
            border: '1px solid #eca6e7ff',
            padding: '20px',
            borderRadius: '12px',
            textAlign: 'center',
            backgroundImage: 'linear-gradient(to right, #f8c6f2ff, #fffecbff',
            maxWidth: '800px',
            margin: '20px auto'
        }}>
            <Avatar />
            <UserName />
            <UserBio />
        </div>
    );
};

export default UserCard;