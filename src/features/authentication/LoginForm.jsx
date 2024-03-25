import { useForm } from 'react-hook-form';
import Button from '../../components/Button';
import Form from '../../components/Form';
import Spinner from '../../components/Spinner';
// import { promise } from '../../services/appwrite';

function LoginForm({ mutation: { isLoading, mutate: login } }) {
  // react form hooks
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm();

  // event handlers
  async function onSuccess({ email, password }) {
    // Array.from({length:100000000})
    // console.log(data);
    // login({ email, password });
    try {
      // const res = await promise;
      //
      // console.log(res);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <Form onSubmit={handleSubmit(onSuccess)}>
      <Form.Input
        label="Email"
        defaultValue="salahakon1998@gmail.com"
        {...register('email', {
          required: true,
          // eslint-disable-next-line no-useless-escape
          pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
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

      <Button
        className="mt-4 disabled:bg-brand-400"
        disabled={!isValid || isLoading}
      >
        {isLoading ? <Spinner /> : 'Log in'}
        {/* <Spinner /> */}
      </Button>
    </Form>
  );
}

export default LoginForm;
