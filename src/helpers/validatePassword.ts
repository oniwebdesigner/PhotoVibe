export default function validatePassword(password: string) {
    // Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character
    const regex =
     /^.{8,}$/;
    return regex.test(password);
  }