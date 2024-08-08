import {useParams} from 'react-router-dom';

const data ={
    velopert: {
        name: '나',
        description: '나나나'
    },
    gildong: {
        name: '길동',
        description: '길길길'
    }
};

const Profile=()=>{
    const params = useParams();
    const profile = data[params.username];

    return (
        <div>
            <h1>프로필</h1>
            {profile?(
                <div>
                    <h2>{profile.name}</h2>
                    <p>{profile.description}</p>
            
                </div>) : (
                    <p>존재하지 않습니다</p>
            )
        }
        </div>
    )
}

export default Profile;