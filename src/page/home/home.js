import './home.css';
import '../../styles/css/bootstrap.min.css';
import '../../styles/css/App.css';
import hinh1 from '../../image/173281189.jpg';
import hinh2 from '../../image/1651729679291.jpg';
import hinh3 from '../../image/hinh1_dxxx.jpg';
import { Link } from 'react-router-dom';
import {
  faBed,
  faCamera,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function home() {
  return (
    <div>
      <header className="App-header">
        <nav className="navbar navbar-light justify-content-center">
          <a href="/" className="navbar-brand logo_team">
            Tour & Travel
          </a>
          <form className="form-inline">
            <Link to="../register-hotel">
              <button
                type="button"
                className="btn btn-outline-info color_hover_btn_outline_info"
              >
                Đăng thông tin phòng nghỉ của quý khách
              </button>
            </Link>
            <Link to="../login">
              <button type="button" className="btn btn-light btn_sign">
                Đăng Nhập
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
              <FontAwesomeIcon icon={faPlane} />
              Chuyến Bay
            </button>
          </Link>
          <Link to="/">
            <button
              type="button"
              className="btn btn-light button-navbar btn_sign btn_select_list"
            >
              <FontAwesomeIcon icon={faBed} />
              Chuyến Bay + Khách sạn
            </button>
          </Link>
          <Link to="/">
            <button
              type="button"
              className="btn btn-light button-navbar btn_sign btn_select_list"
            >
              <FontAwesomeIcon icon={faCar} />
              Thuê xe
            </button>
          </Link>
          <Link to="/ ">
            <button
              type="button"
              className="btn btn-light button-navbar btn_sign btn_select_list"
            >
              <FontAwesomeIcon icon={faCamera} />
              Địa điểm tham quan
            </button>
          </Link>
          <Link to="/">
            <button
              type="button"
              className="btn btn-light button-navbar btn_sign btn_select_list"
            >
              <FontAwesomeIcon icon={faTaxi} />
              Taxi sân bay
            </button>
          </Link>
        </nav>
      </header>
      <div className="contener">
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-bs-ride="true"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={hinh1} alt="First slide" className="d-block w-100" />
              </div>
              <div className="carousel-item">
                <img src={hinh2} alt="Second slide" className="d-block w-100" />
              </div>
              <div className="carousel-item">
                <img src={hinh3} alt="Third slide" className="d-block w-100" />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        <div className="info_select">
          <div className="text_1">Áp dụng đến 3/1/2023</div>
          <div className="text_2">Tiết kiệm 15% với Ưu Đãi Cuối Năm</div>
          <div className="text_3">
            Vẫn còn kịp để thực hiện thêm một chuyến đi trong danh sách của bạn
          </div>
          <button type="button" className="btn btn-primary buton_text zindex">
            Khám phá ưu đãi
          </button>
        </div>
      </div>
    </div>
  );
}

export default home;
