import { Link, useParams } from 'react-router-dom';

const Project = () => {
  const params = useParams();
  return <div>Single Project {params.projectId}</div>;
};

export default Project;
