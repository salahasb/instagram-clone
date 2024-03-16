import { useForm } from 'react-hook-form';
import Button from '../../components/Button';
import Form from '../../components/Form';
import useLogin from './useLogin';

function LoginForm() {
  // react query hooks
  const { isLoading, error, login } = useLogin();

  // react form hooks
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm();

  // event handlers
  function onSuccess(data) {
    // console.log(data);
  }

  return (
    <Form onSubmit={handleSubmit(onSuccess)}>
      <Form.Input
        label="Email"
        defaultValue="  salahakon1998@gmail.com"
        {...register('email', {
          required: true,
        })}
      />

      <Form.Input
        type="password"
        label="Password"
        defaultValue="123456"
        {...register('password', {
          required: true,
          minLength: 6,
        })}
      />

      <Button className="mt-4 disabled:bg-brand-400" disabled={!isValid}>
        Log in
      </Button>
    </Form>
  );
}

export default LoginForm;
