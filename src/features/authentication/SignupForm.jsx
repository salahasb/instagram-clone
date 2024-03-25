/* eslint-disable no-useless-escape */
import { useForm } from 'react-hook-form';
import Button from '../../components/Button';
import Form from '../../components/Form';
import { getUserByEmail, getUserByUsername } from '../../services/usersApi';
import { useLogin, useSignup } from './authQueries&Mutations';

function SignupForm() {
  /*************** react hook form *****************/
  const {
    register,
    handleSubmit,
    getValues,
    setError,
    reset,
    formState: { isValid, errors, dirtyFields },
  } = useForm({ mode: 'onChange' });

  /*************** react query *****************/
  const { isSigningIn, signupUser, error } = useSignup();
  //   const { isLoggingIn, loginUser } = useLogin();

  //   const isWorking = isSigningIn || isLoggingIn;

  /*************** event handlers *****************/
  async function onBlurEmail() {
    const email = getValues('email');

    if (!email) return;

    const isExist = await getUserByEmail(email);

    if (isExist) setError('email');
  }

  async function onBlurUsername() {
    const username = getValues('username');

    if (!username) return;

    const isExist = await getUserByUsername(username);

    if (isExist) setError('username');
  }

  // on submit form
  function onSubmit(data) {
    // signup user
    signupUser(data, {
      onError: (error) => {
        console.log(error);
        reset();
      },
    });
  }

  console.log(error);
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Input
        label="Email"
        {...register('email', {
          required: true,

          pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,

          onBlur: onBlurEmail,
        })}
        validation={
          dirtyFields.email ? (errors?.email ? 'error' : 'success') : ''
        }
      />

      <Form.Input
        label="Full name"
        {...register('fullName', { required: true })}
      />

      <Form.Input
        label="Username"
        {...register('username', {
          required: true,
          minLength: 5,

          onBlur: onBlurUsername,
        })}
        validation={
          dirtyFields.username ? (errors?.username ? 'error' : 'success') : ''
        }
      />

      <Form.Input
        type="password"
        label="Password"
        {...register('password', { required: true, minLength: 8 })}
        validation={
          dirtyFields.password ? (errors?.password ? 'error' : 'success') : ''
        }
      />

      <Button
        className="mb-10 mt-5 disabled:bg-brand-400"
        disabled={!isValid || Object.keys(errors).length !== 0 || isSigningIn}
      >
        Sign up
      </Button>

      {error && <p className="text-red-600">{error.message}</p>}
    </Form>
  );
}

export default SignupForm;
