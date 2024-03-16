import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import Form from "../../components/Form";

function SignupForm() {
	const { register, handleSubmit } = useForm();
	return (
		<Form>
			<Form.Input placeholder="Email" />
			<Form.Input placeholder="Full name" />
			<Form.Input placeholder="Username" />
			<Form.Input type="password" placeholder="Password" />
			<Button className="mb-10 mt-5 disabled:bg-brand-400" disabled={true}>
				Sign up
			</Button>
		</Form>
	);
}

export default SignupForm;
