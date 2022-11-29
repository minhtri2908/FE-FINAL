import React from 'react';
import Footer from '../../component/Footer/Footer';
import Header from '../../component/header/header';
import hinh1 from '../../image/1.jpg';
import hinh2 from '../../image/2.jpg';
import hinh3 from '../../image/3.jpg';
import './home.scss';
import vietnam from '../../image/vietnam.png';
import khachsan from '../../image/khachsan.jpg';
import canho from '../../image/canho.jpg';
import resort from '../../image/resort.jpg';
import bietthu from '../../image/bietthu.jpg';
import nhago from '../../image/nha-go-cap-4-dep.jpg';
import nhanghithonda from '../../image/nha-nghi-o-que-3.jpg';
import glamping from '../../image/glamping.jpg';
import nhanghibandb from '../../image/b&b.jpg';
import Ryokan from '../../image/ryokan.jpeg';
import riad from '../../image/riad.jpg';
import khucamtrai from '../../image/khu-cam-trai.jpg';
import nhathuyen from '../../image/nha-thuyen.jpg';
import dalat from '../../image/da-lat.jpg';
import phuquoc from '../../image/phuquoc.jpg';
import sapa from '../../image/sapa.jpg';
import vungtau from '../../image/vungtau.jpg';
import danang from '../../image/danang.jpg';
import quynhon from '../../image/quynhon.jpg';
import quangbinh from '../../image/quangbinh.jpg';
import quangninh from '../../image/quangninh.png';
import { Link } from 'react-router-dom';
import {
  faBed,
  faCalendarDays,
  faCamera,
  faCar,
  faHome,
  faHotel,
  faLocation,
  faPerson,
  faPlane,
  faTaxi,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DateRange, DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { addDays } from 'date-fns';
import { useState } from 'react';
import format from 'date-fns/format';
function Home() {
  const [OpenDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);
  const [ChoosePeople, setChoosePeople] = useState(false);
  const [People, setPeople] = useState({
    Adult: 1,
    Children: 0,
    Room: 1,
  });

  const handlePeople = (name, operation) => {
    setPeople((prev) => {
      return {
        ...prev,
        [name]: operation === 'i' ? People[name] + 1 : People[name] - 1,
      };
    });
  };
  return (
    <>
      <Header />
      <div className="content home">
        <div className="content1">
          <div
            id="carouselExampleIndicators"
            className="carousel slide setheight28rem"
            data-bs-ride="true"
          >
            <div className="carousel-indicators ">
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
            <div className="info_select setheight22rem">
              <div className="text_1">Áp dụng đến 3/1/2023</div>
              <div className="text_2">Tiết kiệm 15% với Ưu Đãi Cuối Năm</div>
              <div className="text_3">
                Vẫn còn kịp để thực hiện thêm một chuyến đi trong danh sách của
                bạn
              </div>
              <button
                type="button"
                className="btn btn-primary buton_text zindex"
              >
                Khám phá ưu đãi
              </button>
            </div>
          </div>
          <div className="headerSearch">
            <FontAwesomeIcon icon={faHotel} className="headerIcon" />
            <input
              type="text"
              placeholder="Mình đi đâu thế?"
              className="headerSearchInput"
            />
            <div type="button">
              <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
              <span
                onClick={() => setOpenDate(!OpenDate)}
                className="headerSearchText"
              >{`${format(date[0].startDate, 'MM/dd/yyyy')} to ${format(
                date[0].endDate,
                'MM/dd/yyyy'
              )} `}</span>

              {OpenDate && (
                <DateRangePicker
                  onChange={(item) => setDate([item.selection])}
                  showSelectionPreview={true}
                  moveRangeOnFirstSelection={false}
                  months={2}
                  ranges={date}
                  direction="horizontal"
                  className="date"
                />
              )}
            </div>
            <div>
              <FontAwesomeIcon icon={faBed} />
              <span
                onClick={() => setChoosePeople(!ChoosePeople)}
                className="headerSearchText"
              >{`${People.Adult} Người lớn - ${People.Children} Trẻ em - ${People.Room} Phòng`}</span>
              {ChoosePeople && (
                <div className="people">
                  <div className="peopleItem">
                    <span className="peopletext">Người lớn</span>
                    <button
                      disabled={People.Adult <= 1}
                      className="couter"
                      onClick={() => handlePeople('Adult', 'd')}
                    >
                      -
                    </button>
                    <span className="couter">{People.Adult}</span>
                    <button
                      className="couter"
                      onClick={() => handlePeople('Adult', 'i')}
                    >
                      +
                    </button>
                  </div>
                  <div className="peopleItem">
                    <span className="peopletext">Trẻ em</span>
                    <button
                      disabled={People.Children <= 0}
                      className="couter"
                      onClick={() => handlePeople('Children', 'd')}
                    >
                      -
                    </button>
                    <span className="couter">{People.Children}</span>
                    <button
                      className="couter"
                      onClick={() => handlePeople('Children', 'i')}
                    >
                      +
                    </button>
                  </div>
                  <div className="peopleItem">
                    <span className="peopletext">Phòng</span>
                    <button
                      disabled={People.Room <= 1}
                      className="couter"
                      onClick={() => handlePeople('Room', 'd')}
                    >
                      -
                    </button>
                    <span className="couter">{People.Room}</span>
                    <button
                      className="couter"
                      onClick={() => handlePeople('Room', 'i')}
                    >
                      +
                    </button>
                  </div>
                </div>
              )}
            </div>
            <div className="headerSearchItem">
              <button className="headerBtn">Tìm kiếm</button>
            </div>
          </div>
        </div>

        {/* Phần ưu đãi */}
        <div className="justify-content-center offset-lg-2 ps-5 py-5">
          <div className="fw-bold fs-3">Ưu Đãi</div>
          <div className="figure-caption">
            Khuyến mãi, giảm giá và ưu đãi đặc biệt dành riêng cho bạn
          </div>
          <div className="setbackgroud mt-md-3 row col-md-9 ">
            <div className="d-flex">
              <div className="infor py-5  px-md-5 ">
                <div className="fw-bold">Đổi gió một thời gian</div>
                <div>
                  Tận hưởng sự tự do với kỳ nghỉ theo tháng trên Booking.com
                </div>
                <div className="pt-3">
                  <button type="button" className="btn btn-primary ">
                    Khám phá kỳ nghỉ theo tháng
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Phần Khám phá Việt Nam */}
        <div className="justify-content-center offset-lg-2 ps-5 pb-md-5">
          <div className="fw-bold fs-3">Khám phá Việt Nam</div>
          <div className="figure-caption">
            Các điểm đến phổ biến này có nhiều điều chờ đón bạn
          </div>
          <div className="row w-75">
            <div className=" pt-3 w-50 col-xs-10 ">
              <Link to="../searchresult">
                <div className="Sites Ha_noi d-flex  ">
                  <div className="px-1 fw-bold fs-3">Hà Nội </div>
                  <div className="National_flag ">
                    <img className="" src={vietnam} alt="lá cờ quốc gia" />
                  </div>
                </div>
              </Link>
            </div>
            <div className="pt-3 w-50 col-xs-10 ">
              <Link to="../searchresult">
                <div className="Sites Hoi_an d-flex">
                  <div className="px-1 fw-bold fs-3">Hội An </div>
                  <div className="National_flag ">
                    <img className="" src={vietnam} alt="lá cờ quốc gia" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="row w-75">
            <div className="pt-3 col-xs-10 col ">
              <div className="Sites TPHCM d-flex   ">
                <div className="px-1 fw-bold fs-3">TP. Hồ Chí Minh </div>
                <div className="National_flag ">
                  <img className="" src={vietnam} alt="lá cờ quốc gia" />
                </div>
              </div>
            </div>
            <div className=" pt-3  col-xs-10 col">
              <div className="Sites Hue d-flex">
                <div className="px-1 fw-bold fs-3">Huế </div>
                <div className="National_flag ">
                  <img className="" src={vietnam} alt="lá cờ quốc gia" />
                </div>
              </div>
            </div>
            <div className=" pt-3 col-xs-10  col ">
              <div className="Sites NhaTrang d-flex">
                <div className="px-1 fw-bold fs-3">Nha Trang </div>
                <div className="National_flag ">
                  <img className="" src={vietnam} alt="lá cờ quốc gia" />
                </div>
              </div>
            </div>
          </div>
          <div className="slide1">
            <div
              id="carouselExampleSlides"
              className="carousel slide "
              data-bs-ride="true"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="d-flex row">
                    <div className="col">
                      <div className="type_of_r_place">
                        <img
                          className="d-block w-100"
                          src={dalat}
                          alt="image canho"
                        />
                      </div>
                      <div>
                        <div>Đà Lạt</div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="type_of_r_place">
                        <img
                          className="d-block w-100"
                          src={phuquoc}
                          alt="image resort"
                        />
                      </div>
                      <div>
                        <div>Phú Quốc</div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="type_of_r_place">
                        <img
                          className="d-block w-100"
                          src={sapa}
                          alt="image resort"
                        />
                      </div>
                      <div>
                        <div>Sapa</div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="type_of_r_place">
                        <img
                          className="d-block w-100"
                          src={vungtau}
                          alt="image canho"
                        />
                      </div>
                      <div>
                        <div>Vũng tàu</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="d-flex row">
                    <div className="col">
                      <div className="type_of_r_place">
                        <img
                          className="d-block w-100"
                          src={danang}
                          alt="image canho"
                        />
                      </div>
                      <div>
                        <div>Đà Nẵng</div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="type_of_r_place">
                        <img
                          className="d-block w-100"
                          src={quynhon}
                          alt="image resort"
                        />
                      </div>
                      <div>
                        <div>Quy Nhơn</div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="type_of_r_place">
                        <img
                          className="d-block w-100"
                          src={quangbinh}
                          alt="image resort"
                        />
                      </div>
                      <div>
                        <div>Quảng Bình</div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="type_of_r_place">
                        <img
                          className="d-block w-100"
                          src={quangninh}
                          alt="image canho"
                        />
                      </div>
                      <div>
                        <div>Quảng Ninh</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleSlides"
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
                data-bs-target="#carouselExampleSlides"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
        {/* Phần chỗ nghỉ dưỡng  */}
        <div className="justify-content-center offset-lg-2 ps-5 pb-md-5">
          <div className="fw-bold fs-3">Tìm theo loại chỗ nghỉ</div>
          <div className="slide1">
            <div
              id="carouselExampleSlidesOnly"
              className="carousel slide "
              data-bs-ride="true"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="d-flex row">
                    <div className="col">
                      <div className="type_of_r_place">
                        <img
                          className="d-block w-100"
                          src={canho}
                          alt="image canho"
                        />
                      </div>
                      <div>
                        <div className="fw-bold">Căn hộ</div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="type_of_r_place">
                        <img
                          className="d-block w-100"
                          src={khachsan}
                          alt="image resort"
                        />
                      </div>
                      <div>
                        <div className="fw-bold">Khách sạn</div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="type_of_r_place">
                        <img
                          className="d-block w-100"
                          src={resort}
                          alt="image resort"
                        />
                      </div>
                      <div>
                        <div className="fw-bold">Resort</div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="type_of_r_place">
                        <img
                          className="d-block w-100"
                          src={bietthu}
                          alt="image canho"
                        />
                      </div>
                      <div>
                        <div className="fw-bold">Biệt thự</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="d-flex row">
                    <div className="col">
                      <div className="type_of_r_place">
                        <img
                          className="d-block w-100"
                          src={nhago}
                          alt="image canho"
                        />
                      </div>
                      <div>
                        <div className="fw-bold">Nhà gỗ</div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="type_of_r_place">
                        <img
                          className="d-block w-100"
                          src={nhanghithonda}
                          alt="image resort"
                        />
                      </div>
                      <div>
                        <div className="fw-bold">Nhà nghỉ thôn dã</div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="type_of_r_place">
                        <img
                          className="d-block w-100"
                          src={glamping}
                          alt="image resort"
                        />
                      </div>
                      <div>
                        <div className="fw-bold">Glamping</div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="type_of_r_place">
                        <img
                          className="d-block w-100"
                          src={nhanghibandb}
                          alt="image canho"
                        />
                      </div>
                      <div>
                        <div className="fw-bold">Nhà nghỉ B&B</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="d-flex row">
                    <div className="col">
                      <div className="type_of_r_place">
                        <img
                          className="d-block w-100"
                          src={Ryokan}
                          alt="image canho"
                        />
                      </div>
                      <div>
                        <div className="fw-bold">Ryokan</div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="type_of_r_place">
                        <img
                          className="d-block w-100"
                          src={riad}
                          alt="image resort"
                        />
                      </div>
                      <div>
                        <div className="fw-bold">Riad</div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="type_of_r_place">
                        <img
                          className="d-block w-100"
                          src={khucamtrai}
                          alt="image resort"
                        />
                      </div>
                      <div>
                        <div className="fw-bold">Khu cam trai</div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="type_of_r_place">
                        <img
                          className="d-block w-100"
                          src={nhathuyen}
                          alt="image canho"
                        />
                      </div>
                      <div>
                        <div className="fw-bold">Nhà thuyền</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleSlidesOnly"
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
                data-bs-target="#carouselExampleSlidesOnly"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
