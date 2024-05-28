import { CSSProperties, useMemo } from "react";
import styles from "./form-input.module.css";

interface FormInputProps {
  label: string;
  iconBefore?: string;
  placeholder: string;
  iconAfter?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: "text" | "password"; // Thêm prop type
  onIconClick?: () => void; // Thêm prop onIconClick
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  iconBefore,
  placeholder,
  iconAfter,
  value,
  onChange,
  type = "text",
  onIconClick, // Nhớ thêm prop onIconClick vào destructuring
}) => {
  const inputType = useMemo(() => {
    return type === "password" ? "password" : "text";
  }, [type]);

  return (
    <div className={styles.formInput}>
      <div className={styles.userName}>{label}</div>
      <div className={styles.input}>
        {iconBefore && (
          <img
            className={styles.vuesaxoutlineaddSquareIcon}
            alt=""
            src={iconBefore}
          />
        )}
        <input
          className={styles.userName1}
          placeholder={placeholder}
          type={inputType}
          value={value}
          onChange={onChange}
        />
        {iconAfter && (
          <img
            className={`${styles.vuesaxoutlineaddSquareIcon} ${styles.iconAfter}`} // Thêm class iconAfter
            alt=""
            src={iconAfter}
            style={{ display: "block" }}
            onClick={onIconClick} // Thêm sự kiện onClick cho iconAfter nếu có
          />
        )}
      </div>
      <div className={styles.descriptionWrapper}>
        <div className={styles.description}>Description</div>
      </div>
    </div>
  );
};

export default FormInput;
