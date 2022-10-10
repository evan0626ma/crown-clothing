import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase";

import FormInput from "../form-input/form-input";

const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
}

const SignUpForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert('password do not match');
            return;
        }
        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user, { displayName });
            resetFormFields();

        } catch (error) {

            if (error.code === 'auth/email-already-in-use') {
                alert('Sign up email already in use');
            } else {
                console.log('User creation encountered an error', error);
            }
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    }

    return (
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label="User Name"
                    inputOptions={{
                        type: 'text',
                        required: true,
                        onChange: handleChange,
                        name: "displayName",
                        value: displayName
                    }}
                />

                <FormInput
                    label="Email"
                    inputOptions={{
                        required: true,
                        onChange: handleChange,
                        name: "email",
                        value: email
                    }}
                />
                <FormInput
                    label="Password"
                    inputOptions={{
                        type: 'password',
                        required: true,
                        onChange: handleChange,
                        name: "password",
                        value: password
                    }}
                />
                <FormInput
                    label="Confirm Password"
                    inputOptions={{
                        type: 'password',
                        required: true,
                        onChange: handleChange,
                        name: "confirmPassword",
                        value: confirmPassword
                    }}
                />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default SignUpForm;