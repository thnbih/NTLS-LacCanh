import React, { useState, useEffect } from "react";
import styles from "./Userinterface.module.css";
import { UPagination } from "../components/UPagination/UPagination";
import "tachyons";
import { fireBaseStore } from "../../STORES/firebase.store.js";
import * as _ from "lodash";
import { USideBar } from "../components/USideBar/USideBar";
import { UMap } from "../components/UMap/Umap";
import { USearchBar } from "../components/USearchBar/USearchBar";
import { UPosition } from "../components/UPosition/UPosition";
import { UAdditonalInfo } from "../components/UAdditonalInfo/UAdditonalInfo";
import { Uheader } from "../components/UHeader/Uheader";

export const UserInterface = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [lietSiDangHienThi, setLietSiDangHienThi] = useState({
    id: "Chưa rõ",
    hovaten: "Chưa rõ",
    quequan: "Chưa rõ",
    namsinh: "Chưa rõ",
    chucvu: "Chưa rõ",
    donvi: "Chưa rõ",
    nammat: "Chưa rõ",
    lo: "Chưa rõ",
    hang: "Chưa rõ",
    mo: "Chưa rõ",
  });
  const [danhSachLietSi, setDanhSachLietSi] = useState([]);

  useEffect(() => {
    const danhSachLietSiStream =
      fireBaseStore.danhSachLietSiFullSubject.subscribe(() => {
        setDanhSachLietSi(fireBaseStore.doSearhLietSi());
      });
    return () => {
      danhSachLietSiStream.unsubscribe();
    };
  }, []);

  useEffect(() => {
    setDanhSachLietSi(_.slice(fireBaseStore.danhSachLietSiFull, 0, 200));
    setCurrentPage(0);
  }, []);

  useEffect(() => {
    danhSachLietSi &&
      danhSachLietSi[0] &&
      setLietSiDangHienThi(danhSachLietSi[0]);
  }, [danhSachLietSi]);

  function onSearchClick(ThongTinCanTim) {
    fireBaseStore.searchInforMation = ThongTinCanTim;
    setDanhSachLietSi(fireBaseStore.doSearhLietSi(ThongTinCanTim));
  }

  function onSearchWithLo(lo) {
    setDanhSachLietSi(fireBaseStore.doSearchLietSiWithLo(lo));
  }

  function onPageChoose(event) {
    setCurrentPage(parseInt(event.target.getAttribute("value"), 10));
    if (event.target.getAttribute("value") * 10 < danhSachLietSi.length) {
      setLietSiDangHienThi(
        danhSachLietSi[event.target.getAttribute("value") * 10]
      );
    }
  }
  const [isListVisible, setIsListVisible] = useState(false);

  const toggleListVisibility = () => {
    setIsListVisible(!isListVisible);
  };

  return (
    <>
      <div className={styles["full-body"]}>
        <Uheader length={danhSachLietSi.length} />
        <div className={styles["map-and-list"]}>
          {isListVisible && (
            <div className={styles["list"]}>
              <USideBar
                DanhSachLietSi={danhSachLietSi}
                setLietSiDangHienThi={setLietSiDangHienThi}
                CurrentPage={currentPage}
                lietSiDangHienThi={lietSiDangHienThi}
              />
              <UPagination
                DanhSachLietSi={danhSachLietSi}
                CurrentPage={currentPage}
                OnPageChoose={onPageChoose}
              />
              <button className={styles["toggle-button"]} onClick={toggleListVisibility}>
                Ẩn danh sách
              </button>
            </div>
          )}
          {!isListVisible && (
            <button className={styles["show-list-button"]} onClick={toggleListVisibility}>
              Danh sách Liệt sĩ
            </button>
          )}
          <div className={`${styles["map"]} ${!isListVisible ? styles["map-full-width"] : ""}`}>
            <UMap lietSiDangHienThi={lietSiDangHienThi} OnSearchClick={onSearchWithLo} />
          </div>
        </div>

        <div className={styles["search-bar"]}>
          <USearchBar onSearchClick={onSearchClick} />
        </div>
        <div className={styles["info"]}>
          <UPosition lietSiDangHienThi={lietSiDangHienThi} />
          <UAdditonalInfo lietSiDangHienThi={lietSiDangHienThi} />
        </div>
        <footer className={styles["footer"]}>
          <p>© Thực hiện bởi <img src="./img/logo copy.png"/> Hội sinh viên trường Đại học Công nghệ Thông tin, ĐHQG-HCM</p>
        </footer>
      </div>
    </>
  );
}
