import React, { useState, useEffect } from 'react';
import { FiX } from 'react-icons/fi';

import { ContainerRepository } from './styles';


interface IRepository {
    repository: {
        id?: string;
        nodeId?: string;
        html_url?: string;
        avatar_url?: string;
        login?: string;
    };
}


const Repository: React.FC<IRepository> = ({repository}) => {

    const [followers, setFollowers] = useState(0);
    const [following, setFollowing] = useState(0);


    useEffect(() => {

        async function loadUserDate() {

            // const result = await api.get(`/users/${user.login}`);



            // setFollowers(result.data.followers);
            // setFollowing(result.data.following)
        }

        loadUserDate()

    }, [])
    return (
        <ContainerRepository>
            <img src={repository.avatar_url}
                alt={repository.login} />
            <div>
                <strong>{repository.login} </strong>
                <p><small>Node ID: {repository.nodeId} - User ID: {repository.id}</small></p>
                <p><small>Seguidores: {followers}| Seguindo: {following}</small></p>
                <a href={repository.html_url} target="_blank" rel="noopener noreferrer" >Ver Perfil no Github</a>
            </div>
            <button>
                <FiX size={20} color="#FF0000" />
            </button>

        </ContainerRepository>
    );
}

export default Repository;