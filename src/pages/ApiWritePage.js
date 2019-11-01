import React from 'react';

const ApiWritePage = () => {
    return (
        <div>
            API 등록 페이지
            <form >
                <input type="text" placeholder="ID 입력" />
                <input type="text" placeholder="PW 입력" />
                <input type="text" placeholder="Name 입력" />
                <input type="submit" value="전송"/>
            </form>
        </div>
    );
};

export default ApiWritePage;