import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { FiTrash } from 'react-icons/fi'

import logoImg from '../../assets/logo.svg'

import { Title, Form, Repositories, Header } from './styles'
import Repository from '../../Components/Repository';

interface IRepository {
    id: string;
    nodeId: string;
    html_url: string;
    avatar_url: string;
    login: string;
}


function Dashboard() {

    const [ searchRepository, setSearchRepository ] = useState('');
    const [ repositories, setRepositories ] = useState<IRepository[]>([]);

    return (
        <>
            <Header>
                <img src={logoImg} alt="Github Explorer" />
            </Header>
            <Title>Explore repositórios no Github</Title>

            <Form>
                <input
                    placeholder="Busque um repositório no github"
                    onChange={e => setSearchRepository(e.target.value)}
                    value={searchRepository}
                />
            </Form>

            <Repositories>
                {
                !!repositories.length && 
                  repositories.map((repo) => (
                    <Repository repository={repo} key={repo.id}/>
                   ))
                }
            </Repositories>
        </>
    );
}

export default Dashboard;