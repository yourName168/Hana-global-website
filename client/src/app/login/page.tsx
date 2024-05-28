/* eslint-disable @next/next/no-img-element */
'use client'
import ContainerFrame from "@/components/container-frame";
import FormInput from "@/components/form-input";
import type { NextPage } from "next";
import { useState } from "react";
import styles from "./log-in.module.css";
import axios from "axios";

const LogIn: NextPage = () => {
  const serverURL = process.env.SERVER_URL
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const toggleShowPassword = () => {
    setShowPassword(prevState => !prevState);
  };

  const handleChange = (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prevState => ({
      ...prevState,
      [field]: event.target.value
    }));
  };

  const handleSubmit = async () => {
    // Kiểm tra định dạng email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Email không đúng định dạng.");
      return;
    }

    // Kiểm tra độ dài mật khẩu
    if (formData.password.length < 8) {
      setError("Mật khẩu phải có ít nhất 8 ký tự.");
      return;
    }

    // Xóa thông báo lỗi trước khi gửi yêu cầu đăng nhập
    setError('');

    try {
      const result = await axios.post(`${serverURL}/users/login`, formData);
      const accessToken=result.data.result
      localStorage.setItem("access-token",accessToken)
      window.location.href="/"
      // Xử lý đăng nhập thành công (ví dụ: chuyển hướng, lưu thông tin người dùng, v.v.)
    } catch (error) {
      // Xử lý lỗi đăng nhập (ví dụ: hiển thị thông báo lỗi từ máy chủ)
      setError("Đăng nhập không thành công. Vui lòng kiểm tra lại thông tin.");
    }
  };

  return (
    <div className={styles.logIn}>
      <div className={styles.leftColumn}>
        <h1 className={styles.luxeEscapes}>Hana Global</h1>
        <div className={styles.logoFrame}>
          <div className={styles.formInputFrameUserName}>
            <h1 className={styles.logIn1}>Đăng nhập</h1>
            <div className={styles.pleaseInputEssential}>
              Vui lòng nhập thông tin tài khoản
            </div>
          </div>
          <form className={styles.formLabelEmailAddress} onSubmit={(e) => e.preventDefault()}>
            {error && <div className={styles.error}>{error}</div>} {/* Hiển thị lỗi */}
            <div className={styles.vueSaxEyesIcon}>
              <FormInput
                label="Email*"
                placeholder="nhập email hoặc username"
                value={formData.email}
                onChange={handleChange("email")}
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
            </div>
            <div className={styles.orElseFrame}>
              <button
                type="button"
                className={styles.facebookAppleGoogleLogos}
                onClick={handleSubmit}
              >
                <div className={styles.button}>
                  <img className={styles.vuesaxoutlineinfoCircleIcon} alt="" />
                  <div className={styles.logIn2}>Đăng nhập</div>
                  <img className={styles.vuesaxoutlinearrowRightIcon} alt="" />
                </div>
              </button>
              <div className={styles.dontHaveAnContainer}>
                <span
                  className={styles.dontHaveAn}
                >{`Bạn chưa có tài khoản`}</span>
                <a href="/register" className={styles.signUpLink}>
                  <span className={styles.signUp}>Đăng kí</span>
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className={styles.shape}>
        <div className={styles.baseFrame}>
          <div className={styles.firstRectangle} />
          <img
            className={styles.secondRectangleIcon}
            loading="lazy"
            alt=""
            src="/rectangle-31@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default LogIn;
