import './header.css';
import { Link, useNavigate } from 'react-router-dom';
import {
  faBed,
  faCamera,
  faTaxi,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DateRange, DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { addDays } from 'date-fns';
import React, { useContext, useState } from 'react';
import format from 'date-fns/format';
import { SearchContext } from '../../context/SearchContext';
import { AuthContext } from '../../context/AuthContext';
import Dropdown from 'react-bootstrap/Dropdown';

const Header = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    // navigate('/login');
    window.location.reload();
  };

  const { dispatch } = useContext(SearchContext);
  return (
    <header className="App-header">
      <nav className="navbar navbar-light justify-content-center">
        <a href="/" className="navbar-brand logo_team">
          STYLISH HOTEL
        </a>
        <form className="form-inline d-flex">
          <Link to="../register-hotel">
            <button
              type="button"
              className="btn btn-outline-info color_hover_btn_outline_info"
            >
              Đăng thông tin phòng nghỉ của quý khách
            </button>
          </Link>

          {user ? (
            <>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic" className="btn btn-light btn-user">
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item className="dropdown_user-info">{user.username}</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item onClick={handleLogout} href="#/action-2">Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </>
          ) : (
            <Link to="../login">
              <button type="button" className="btn btn-light btn_sign">
                Đăng Nhập
              </button>
            </Link>
          )}
          <Link to="../support">
            <button type="button" className="btn btn-light btn_sign">
              Hỗ trợ
            </button>
          </Link>
        </form>
      </nav>

      <nav className="navbar navbar-light justify-content-center">
        <Link to="/">
          <button
            type="button"
            className="btn btn-light button-navbar btn_sign btn_select_list"
          >
            <FontAwesomeIcon icon={faBed} />
            Lưu Trú
          </button>
        </Link>
        <Link to="/">
          <button
            type="button"
            className="btn btn-light button-navbar btn_sign btn_select_list"
          >
            <FontAwesomeIcon icon={faBed} className="headerIcon" />
            Khách sạn
          </button>
        </Link>
        <Link to="/visit">
          <button
            type="button"
            className="btn btn-light button-navbar btn_sign btn_select_list"
          >
            <FontAwesomeIcon icon={faCamera} className="headerIcon" />
            Địa điểm tham quan
          </button>
        </Link>

        <button
          type="button"
          className="btn btn-light button-navbar btn_sign btn_select_list"
        >
          <FontAwesomeIcon icon={faTaxi} className="headerIcon" />
          Taxi sân bay
        </button>
      </nav>
    </header>
  );
};

export default Header;
