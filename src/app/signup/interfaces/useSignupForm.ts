export interface UseSignupForm {
    handleSignup: (e: React.FormEvent<HTMLFormElement>, username: string, password: string, email: string, confirmPassword: string) => void;
}

