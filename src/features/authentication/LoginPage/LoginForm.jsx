import { useForm } from "react-hook-form";
import Button from "../../../components/Button";
import Form from "../../../components/Form";

function LoginForm() {
	const { register, handleSubmit } = useForm();

	return (
		<Form>
			<Form.Input placeholder="Email" />
			<Form.Input type="password" placeholder="Password" />
			<Button className="mt-4 disabled:bg-brand-400" disabled={true}>
				Log in
			</Button>
		</Form>
	);
}

export default LoginForm;
