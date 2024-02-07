import React from "react";

const date = {
    casava840: {
        name: "강병재",
        description: "풀스택 개발자"
    },
    gildong: {
        name: "홍길동",
        description: "전래동화의 주인공"
    }
};

const Profile = ({ match }) => {
    const { username } = match.params;
    const profile = date[username];
    if (!profile) {
        return <div>존재하지 않는 사용자입니다.</div>;
    }
    return (
        <div>
            <h3>
                {username}({profile.name})
            </h3>
            <p>{profile.description}</p>
        </div>
    );
};

export default Profile;