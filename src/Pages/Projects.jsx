import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const [arr, setArr] = useState([1, 2, 3, 4, 5, 6, 7]);
  return (
    <div className='grid'>
      {arr.map((num, value) => {
        return (
          <Link key={value} to={'/projects/' + num}>
            Project {num}
          </Link>
        );
      })}

      <button
        className='mt-3 px-10 py-5 bg-black text-white rounded-md hover:text-black hover:bg-white hover:border-black'
        onClick={(_) => {
          setArr((arr) => {
            return [...arr, arr.length + 1];
          });
        }}
      >
        Increase project
      </button>
    </div>
  );
};

export default Projects;
