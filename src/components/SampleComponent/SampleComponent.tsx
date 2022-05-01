import React from 'react';

interface SampleComponentProps {
  message: string;
}

export const SampleComponent: React.FC<SampleComponentProps> = ({ message }) => {
  return <h1>{message}</h1>;
};
