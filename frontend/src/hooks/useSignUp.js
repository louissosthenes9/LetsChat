import { useState } from "react";
import toast from "react-hot-toast";
import {useAuthContext} from "../context/AuthContext.jsx";

const useSignup = () => {
	const [loading, setLoading] = useState(false);
     const {auth,setAuth} = useAuthContext();
	const signup = async ({ fullName, username, password, confirmPassword, gender,email }) => {
		const success = handleInputErrors({ fullName,email, username, password, confirmPassword, gender });
		if (!success) return;

		setLoading(true);
		try {
			const res = await fetch("/api/users/signup", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ fullName,email, username, password, confirmPassword, gender }),
			});

			const data = await res.json();
			if (data.error) {
				throw new Error(data.error);
			}
			//store token in local storage
			localStorage.setItem("chat-user", JSON.stringify(data));

			setAuth(data)
		} catch (error) {
			toast.error(error.message);
      console.log(error)
		} finally {
			setLoading(false);
		}
	};

	return { loading, signup };
};
export default useSignup;

function handleInputErrors({ fullName, username, password, confirmPassword,email, gender }) {
	if (!fullName || !username || !password || !confirmPassword || !gender || !email) {
		toast.error("Please fill in all fields");
		return false;
	}

	if (password !== confirmPassword) {
		toast.error("Passwords do not match");
		return false;
	}

	if (password.length < 6) {
		toast.error("Password must be at least 6 characters");
		return false;
	}

	return true;
}