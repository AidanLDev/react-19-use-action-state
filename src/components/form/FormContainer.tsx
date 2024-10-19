import React, { useActionState } from 'react';
import TextInput from './TextInput';
import SubmitButton from './SubmitButton';

interface IFormState {
  firstName: string;
  lastName: string;
  email: string;
}

export default function FormContainer() {
  const initialState: IFormState = {
    firstName: '',
    lastName: '',
    email: '',
  };

  const submitUserData = async (
    previousState: IFormState,
    formData: FormData
  ) => {
    const inputtedFirstName = formData.get('firstName') as string;
    const inputtedLastName = formData.get('lastName') as string;
    const inputtedEmail = formData.get('email') as string;

    console.log({ inputtedFirstName, inputtedLastName, inputtedEmail });

    await new Promise((resolve) =>
      setTimeout(() => {
        console.log('Submitting');
        resolve(true);
      }, 2000)
    );

    return {
      firstName: inputtedFirstName,
      lastName: inputtedLastName,
      email: inputtedEmail,
    };
  };

  const [state, action, pending] = useActionState(submitUserData, initialState);

  if (pending) {
    return <p>...Imagine a really cool spinner here! Wow!</p>;
  }

  console.log('state: ', state);

  return (
    <div className='form-container'>
      <form action={action}>
        <div className='personal-form-inputs'>
          <TextInput label='First Name' name='firstName' />
          <TextInput label='Last Name' name='lastName' />
          <TextInput label='Email' name='email' />
        </div>
        <SubmitButton />
      </form>
      {state.firstName !== '' && <p>First Name: {state.firstName}</p>}
      {state.lastName !== '' && <p>Last Name: {state.lastName}</p>}
      {state.email !== '' && <p>Email: {state.email}</p>}
    </div>
  );
}
