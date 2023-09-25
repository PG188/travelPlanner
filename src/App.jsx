import React, { useState } from 'react';

const config = [
  {
    name: 'Frontend Development',
    id: 'frontend_development'
  },
  {
    name: 'Software Development',
    id: 'software_development'
  },
  {
    name: 'Cloud Services',
    id: 'cloud_services'
  },
  {
    name: 'Machine Learning',
    id: 'machine_learning'
  }
];

const Page = () => {
  const [hasVoted, setHasVoted] = useState(false);
  const [error, setError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [results, setResults] = useState(null);


  const handleClick = async (id) => {
    setIsSubmitting(true);
    try {
      const response = await fetch(`/api/create-vote?id=${id}`);
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const result = await response.json();
      setResults(result);
      setIsSubmitting(false);
      setHasVoted(true);
    } catch (error) {
      setIsSubmitting(false);
      setError({
        error: true,
        message: error.message
      });
    }
  };

  return null;
};

export default Page;