import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase";

import SignUpForm from "../../components/sign-up/sign-up";
const SignIn = () => {

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }


    return (
        <div>
            <h1>Sign In</h1>
            <button onClick={logGoogleUser}>Sign in with Google Popup</button>
            <SignUpForm/>
        </div>
    )
}

export default SignIn;