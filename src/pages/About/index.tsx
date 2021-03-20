import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { Header, Repositories, Title } from './style';
import { FiChevronLeft } from 'react-icons/fi'
import Repository from '../../Components/Repository';
import logoImg from '../../assets/logo.svg'


interface IRepository {
  id: string;
  nodeId: string;
  html_url: string;
  avatar_url: string;
  login: string;
}

interface RepositoryParams {
  repository: IRepository;
}


const About: React.FC = () => {

  const [ repositories, setRepositories ] = useState<IRepository[]>([]);

  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Explorer" />
        <Link to='/'>
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      <Title>Usuários removido de sua lista</Title>

      <Repositories>
        { 
          !!repositories.length &&
            repositories.map((repo) => (
              <Repository repository={repo} key={repo.id} />
            ))
        }
      </Repositories>

    </>
  );
}

export default About;