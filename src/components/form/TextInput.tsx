import React from 'react';

interface ITextInput {
  label: string;
  name: string;
}

export default function TextInput({ label, name }: ITextInput) {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input name={name} id={name} className='text-input' />
    </div>
  );
}
