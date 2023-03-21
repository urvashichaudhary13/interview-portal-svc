export const validateEmail = (email: string) => {
    const validEmail = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+\.[a-z]{2,3}$/;
    return validEmail.test(email);
  };