import React from 'react';
import { useParams } from 'react-router-dom';

function Student() {
  const params = useParams()
  return <h1>{params.id}</h1>;
}

export default Student
