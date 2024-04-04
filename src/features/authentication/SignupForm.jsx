/* eslint-disable no-useless-escape */
import { useForm } from 'react-hook-form';
import Button from '../../components/Button';
import Form from '../../components/Form';
import { checkEmail, checkUsername } from '../../services/authApi';
import { useSignup } from './authQueries&Mutations';

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
  const { isLoading, signupUser, error } = useSignup();

  /*************** event handlers *****************/
  async function handleOnBlur(field) {
    const value = getValues(field);

    if (!value) return;

    const user =
      field === 'username'
        ? await checkUsername(value)
        : await checkEmail(value);

    const isExist = Object.keys(user).length !== 0;
    console.log(user);
    if (isExist) setError(field);
  }

  function onSubmit(data) {
    // signup user
    signupUser(data, {
      onError: (error) => {
        console.log(error);
        reset();
      },
    });
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Input
        label="Email"
        {...register('email', {
          required: true,
          pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
          onBlur: () => handleOnBlur('email'),
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
          onBlur: () => handleOnBlur('username'),
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
        disabled={!isValid || Object.keys(errors).length !== 0 || isLoading}
      >
        Sign up
      </Button>

      {error && <p className="text-red-600">{error.message}</p>}
    </Form>
  );
}

export default SignupForm;
