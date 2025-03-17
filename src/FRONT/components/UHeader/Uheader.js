import React from "react";
import styles from "./Uheader.module.css";

export const Uheader = () => {
  return (
    <div className={styles['header']}>
        <div className={styles['topContent']}>
            <div className={styles['logo']}>
                <img src="logo.png" alt="Logo"/>
            </div>
            <div className={styles['name']}>
                <p>Hệ thống tra cứu thông tin mộ liệt sĩ</p>
                <h1>
                    Nghĩa trang Liệt sĩ Lạc Cảnh
                </h1>
            </div>
        </div>
        <div className={styles['title-dong']}>
            <span>
                CÔNG TRÌNH CỦA TUỔI TRẺ THÀNH PHỐ HỒ CHÍ MINH CHÀO MỪNG KỶ NIỆM 50 NĂM NGÀY GIẢI PHÓNG MIỀN NAM, THỐNG NHẤT ĐẤT NƯỚC (30/4/1975 - 30/4/2025)
            </span>
        </div>
        <div className={styles['big-picture']}>
            <img src="bannerhethong2.png" alt="Big picture"/>
        </div>
    </div>
  );
};
