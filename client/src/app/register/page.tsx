'use client'
import { useState } from 'react';
import { NextPage } from 'next';
import zxcvbn from 'zxcvbn'; // Import thư viện zxcvbn
import styles from './register.module.css';
import FormInput from '@/components/form-input';
import axios from 'axios';

const Register: NextPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirm_password: '',
    phoneNumber: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const serverURL = process.env.SERVER_URL
  const toggleShowPassword = () => {
    setShowPassword(prevState => !prevState);
  };

  const handleChange = (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prevState => ({
      ...prevState,
      [field]: event.target.value
    }));
    setError(''); // Reset error message when input changes
  };

  const handleSubmit = async () => {
    // Kiểm tra mật khẩu mạnh
    const passwordStrength = zxcvbn(formData.password);
    if (passwordStrength.score < 3) {
      setError("Password is not strong enough.");
      return;
    }

    // Kiểm tra định dạng email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Invalid email format.");
      return;
    }

    // Kiểm tra số điện thoại có đủ 10 chữ số không
    const phoneNumberRegex = /^\d{10}$/;
    if (!phoneNumberRegex.test(formData.phoneNumber)) {
      setError("Phone number must be 10 digits.");
      return;
    }

    // Kiểm tra mật khẩu và xác nhận mật khẩu
    if (formData.password !== formData.confirm_password) {
      setError('Passwords and confirmPassword do not match.');
      return;
    }

    // Nếu các điều kiện đều đúng, thực hiện các hành động tiếp theo
    // Ví dụ: Gửi dữ liệu đăng ký đến máy chủ
    try {
      const response = await axios.post(`${serverURL}/users/register`, formData);
      console.log("Registration successful:", response);
      const accessToken=response.data.result
      localStorage.setItem("access-token",accessToken)
      // Xử lý thành công, ví dụ: chuyển hướng người dùng đến trang đăng nhập
    } catch (error) {
      console.error("Registration failed:", error);
      setError('Registration failed. Please try again.'); // Hiển thị lỗi khi đăng ký thất bại
    }
  };

  return (
    <div className={styles.fullPage}>
      <div className={styles.leftColumn}>
        <b className={styles.luxeEscapes}>Luxe Escapes</b>
        <div className={styles.frameParent}>
          <div className={styles.signUpParent}>
            <b className={styles.signUp}>Sign Up</b>
            <div className={styles.pleaseInputEssential}>
              Please input essential data to create your account.
            </div>
          </div>
          <div className={styles.frameGroup}>
            {error && <div className={styles.error}>{error}</div>} {/* Hiển thị lỗi */}
            <div className={styles.formInputParent}>
              <FormInput
                label="Full Name*"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange('name')}
              />
              <FormInput
                label="Email*"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleChange('email')}
              />
              <FormInput
                label="Password*"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange('password')}
                type={showPassword ? 'text' : 'password'}
                iconAfter="/eye-slash.svg"
                onIconClick={toggleShowPassword}
              />
              <FormInput
                label="Confirm password*"
                placeholder="Enter your confirm password"
                value={formData.confirm_password}
                onChange={handleChange('confirm_password')}
                type={showPassword ? 'text' : 'password'}
                iconAfter="/eye-slash.svg"
                onIconClick={toggleShowPassword}
              />
              <FormInput
                label="Phone number*"
                placeholder="Enter your phone number"
                value={formData.phoneNumber}
                onChange={handleChange('phoneNumber')}
              />
            </div>
            <div className={styles.buttonParent}>
              <div
                onClick={handleSubmit}
                style={{ width: "100%", textDecoration: "none", color: "black", cursor: "pointer" }}
              >
                <div className={styles.button}>
                  <div className={styles.vuesaxoutlineinfoCircle} />
                  <div className={styles.luxeEscapes}>Sign up</div>
                  <div className={styles.vuesaxoutlineinfoCircle} />
                </div>
              </div>
              <div className={styles.alreadyHaveAnContainer}>
                <span>{`Already have an account? `}</span>
                <a href="/login" className={styles.logInLink}>
                  <span className={styles.logIn}>Log in</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.shape}>
        <div className={styles.shapeChild} />
        <img className={styles.shapeItem} alt="" src="rectangle-3@2x.png" />
      </div>
    </div>
  );
};

export default Register;
