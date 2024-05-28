/* eslint-disable @next/next/no-img-element */
'use client'
import Link from "@mui/material/Link";
import { useEffect, useState } from "react";
import styles from "./nav-bar.module.css";
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import axios from "axios";

const LoginButton = ({ onClick }: any) => (
  <button className={styles.button} onClick={onClick}>
    Đăng nhập
  </button>
);
const RegisterButton = ({ onClick }: any) => (
  <button className={styles.button} onClick={onClick}>
    Đăng ký
  </button>
);
const LogoutButton = ({ onClick }: any) => (
  <button className={styles.button} onClick={onClick}>
    Đăng xuất
  </button>
);
const NavBar = () => {
  const accessToken = localStorage.getItem("access-token")
  const serverURL = process.env.SERVER_URL
  const [user, setUser] = useState<any>()
  const [showSearchInput, setShowSearchInput] = useState(false); // State to manage search input visibility

  useEffect(() => {
    axios.get(`${serverURL}/users/get-me`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      }
    ).then((res) => {
      setUser(res.data)
    }).catch(() => {
      setUser(undefined)
    })
  }, [accessToken]);

  const handleChange = (event: any) => {
    const selectedValue = event.target.value;
    if (selectedValue === 1) {
      window.location.href = '/service/?type=flight-ticket';
    } else if (selectedValue === 2) {
      window.location.href = '/service/?type=hotel-room';
    } else if (selectedValue === 3) {
      window.location.href = '/service/?type=car-rental';
    }
  };

  const [pageActive, setPageActive] = useState<string>((localStorage.getItem("page-active")) || "home")
  useEffect(() => {
    setPageActive(localStorage.getItem("page-active") as string)
  }, [localStorage.getItem("page-active")])

  const handleLoginClick = () => {
    // Thêm logic xử lý khi người dùng click vào nút Đăng nhập
    console.log('Đăng nhập clicked');
    // Ví dụ: điều hướng đến trang đăng nhập
    window.location.href = '/login';
  };

  const handleRegisterClick = () => {
    // Thêm logic xử lý khi người dùng click vào nút Đăng ký
    console.log('Đăng ký clicked');
    // Ví dụ: điều hướng đến trang đăng ký
    window.location.href = '/register';
  };

  const handleLogoutClick = () => {
    localStorage.setItem("access-token", "")
    window.location.reload()
  }

  const toggleSearchInput = () => {
    setShowSearchInput(prev => !prev);
  };

  return (
    <div className={styles["nav-bar"]}>
      <Link href="/" underline="none">
        <p className={styles["luxe-escapes"]}>Hana Global</p>
      </Link>
      <div className={styles["menu-items"]}>
        <Link href="/" underline="none">
          <p className={styles[pageActive === "home" ? "home" : "tours"]}>
            Trang chủ
          </p>
        </Link>
        <Link href="/list-of-blog/?type=travel" underline="none">
          <p className={styles[pageActive === "travel" ? "home" : "tours"]}>
            Bài viết
          </p>
        </Link>
        <FormControl sx={{ m: 1, minWidth: 80, color: "none" }} >
          <InputLabel id="demo-simple-select-autowidth-label">Dịch Vụ</InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={0}
            onChange={handleChange}
            className={styles[pageActive === "service" ? "home" : "tours"]}
            autoWidth
            label="service"
            onClick={() => {
              localStorage.setItem("page-active", "service")
            }}
          >
            <MenuItem value={1}>vé máy bay</MenuItem>
            <MenuItem value={2}>khách sạn</MenuItem>
            <MenuItem value={3}>thuê xe</MenuItem>
          </Select>
        </FormControl>
        {/* <Link href="/list-of-blog/?type=visa" underline="none" onClick={() => {
          localStorage.setItem("page-active", "visa")
        }}>
          <p className={styles[pageActive === "visa" ? "home" : "tours"]}>
            Visa
          </p>
        </Link> */}
        <Link href="/contact-us" underline="none">
          <p className={styles[pageActive === "contact" ? "home" : "tours"]}>
            Liên Hệ
          </p>
        </Link>
      </div>
      <div className={styles["vuesaxoutlinesearch-normal-parent"]}>
        <div className={styles["search-container"]}>
          <Button onClick={toggleSearchInput}>
            <img
              className={styles["vuesaxoutlinesearch-normal-icon"]}
              alt=""
              src="/vuesaxoutlinesearchnormal.svg"
            />
          </Button>
          {showSearchInput && (
            <TextField
              variant="outlined"
              size="small"
              placeholder="Tìm kiếm bài viết..."
              className={styles["search-input"]}
              onKeyPress={(event) => {
                if (event.key === 'Enter') {
                  // Lấy giá trị của TextField và thực hiện các hành động tiếp theo
                  const searchValue = (event.target as HTMLInputElement).value;
                  
                }
              }}
            />
          )}
        </div>
        <div className={styles["frame-child"]}></div>
        <Button
          onClick={() => {
            window.location.href = "./cart"
          }}
        >
          <img
            className={styles["vuesaxoutlinesearch-normal-icon"]}
            alt=""
            src="/shopping-bag.svg"
          />
        </Button>
        <div className={styles["frame-child"]}></div>
        <div className={styles["avatar-parent"]}>
          <div className={styles["auth-buttons"]}>
            {user ? (
              <div style={{ display: "flex", alignItems: "center" }}>
                <div>Xin Chào {user.name}</div>
                <LogoutButton onClick={handleLogoutClick} />
              </div>
            ) : (
              <>
                <LoginButton onClick={handleLoginClick} />
                <RegisterButton onClick={handleRegisterClick} />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
