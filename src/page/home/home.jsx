import React from 'react';
import Footer from '../../component/Footer/Footer';
import Header from '../../component/header/header';
import './home.scss';
import { Link } from 'react-router-dom';
import {
  faBed,
  faCalendarDays,
  faHotel,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DateRange, DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { addDays } from 'date-fns';
import { useState } from 'react';
import format from 'date-fns/format';
import { Image } from 'cloudinary-react';

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
                <Image
                  cloudName="dxivl2lh5"
                  publicId="1_vu75bt"
                  className="d-block w-100"
                  crop="scale"
                />
              </div>
              <div className="carousel-item">
                <Image
                  cloudName="dxivl2lh5"
                  publicId="2_xekldn"
                  className="d-block w-100"
                  crop="scale"
                />
              </div>
              <div className="carousel-item">
                <Image
                  cloudName="dxivl2lh5"
                  publicId="3_wnjtpa"
                  className="d-block w-100"
                  crop="scale"
                />
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
              <div className="text_1">??p d???ng ?????n 3/1/2023</div>
              <div className="text_2">Ti???t ki???m 15% v???i ??u ????i Cu???i N??m</div>
              <div className="text_3">
                V???n c??n k???p ????? th???c hi???n th??m m???t chuy???n ??i trong danh s??ch c???a
                b???n
              </div>
              <button
                type="button"
                className="btn btn-primary buton_text zindex"
              >
                Kh??m ph?? ??u ????i
              </button>
            </div>
          </div>
          <div className="headerSearch">
            <FontAwesomeIcon icon={faHotel} className="headerIcon" />
            <input
              type="text"
              placeholder="M??nh ??i ????u th????"
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
              >{`${People.Adult} Ng?????i l???n - ${People.Children} Tr??? em - ${People.Room} Ph??ng`}</span>
              {ChoosePeople && (
                <div className="people">
                  <div className="peopleItem">
                    <span className="peopletext">Ng?????i l???n</span>
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
                    <span className="peopletext">Tr??? em</span>
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
                    <span className="peopletext">Ph??ng</span>
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
              <button className="headerBtn">T??m ki???m</button>
            </div>
          </div>
        </div>

        {/* Ph???n ??u ????i */}
        <div className="justify-content-center offset-lg-2 ps-5 py-5">
          <div className="fw-bold fs-3">??u ????i</div>
          <div className="figure-caption">
            Khuy???n m??i, gi???m gi?? v?? ??u ????i ?????c bi???t d??nh ri??ng cho b???n
          </div>
          <div className="setbackgroud mt-md-3 row col-md-9 ">
            <div className="d-flex">
              <div className="infor py-5  px-md-5 ">
                <div className="fw-bold">?????i gi?? m???t th???i gian</div>
                <div>
                  T???n h?????ng s??? t??? do v???i k??? ngh??? theo th??ng tr??n Booking.com
                </div>
                <div className="pt-3">
                  <button type="button" className="btn btn-primary ">
                    Kh??m ph?? k??? ngh??? theo th??ng
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Ph???n Kh??m ph?? Vi????t Nam */}
        <div className="justify-content-center offset-lg-2 ps-5 pb-md-5">
          <div className="fw-bold fs-3">Kh??m ph?? Vi????t Nam</div>
          <div className="figure-caption">
            C??c ??i???m ?????n ph??? bi???n n??y c?? nhi???u ??i???u ch??? ????n b???n
          </div>
          <div className="row w-75">
            <div className=" pt-3 w-50 col-xs-10 ">
              <Link to="../searchresult">
                <div className="Sites Ha_noi d-flex  ">
                  <div className="px-1 fw-bold fs-3">H?? N???i </div>
                  <div className="National_flag ">
                    <Image
                      cloudName="dxivl2lh5"
                      publicId="places/vietnam_fseacf"
                      crop="scale"
                    />
                  </div>
                </div>
              </Link>
            </div>
            <div className="pt-3 w-50 col-xs-10 ">
              <Link to="../searchresult">
                <div className="Sites Hoi_an d-flex">
                  <div className="px-1 fw-bold fs-3">H???i An </div>
                  <div className="National_flag ">
                    <Image
                      cloudName="dxivl2lh5"
                      publicId="places/vietnam_fseacf"
                      crop="scale"
                    />
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="row w-75">
            <div className="pt-3 col-xs-10 col ">
              <div className="Sites TPHCM d-flex   ">
                <div className="px-1 fw-bold fs-3">TP. H??? Ch?? Minh </div>
                <div className="National_flag ">
                  <Image
                    cloudName="dxivl2lh5"
                    publicId="places/vietnam_fseacf"
                    crop="scale"
                  />
                </div>
              </div>
            </div>
            <div className=" pt-3  col-xs-10 col">
              <div className="Sites Hue d-flex">
                <div className="px-1 fw-bold fs-3">Hu??? </div>
                <div className="National_flag ">
                  <Image
                    cloudName="dxivl2lh5"
                    publicId="places/vietnam_fseacf"
                    crop="scale"
                  />
                </div>
              </div>
            </div>
            <div className=" pt-3 col-xs-10  col ">
              <div className="Sites NhaTrang d-flex">
                <div className="px-1 fw-bold fs-3">Nha Trang </div>
                <div className="National_flag ">
                  <Image
                    cloudName="dxivl2lh5"
                    publicId="places/vietnam_fseacf"
                    crop="scale"
                  />
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
                        <Image
                          cloudName="dxivl2lh5"
                          publicId="places/da-lat_s4w1q5"
                          className="d-block w-100"
                          crop="scale"
                          alt="image canho"
                        />
                      </div>
                      <div>
                        <div>???? L???t</div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="type_of_r_place">
                        <Image
                          cloudName="dxivl2lh5"
                          publicId="places/phuquoc_cvx6gt"
                          className="d-block w-100"
                          crop="scale"
                          alt="image canho"
                        />
                      </div>
                      <div>
                        <div>Ph?? Qu???c</div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="type_of_r_place">
                        <Image
                          cloudName="dxivl2lh5"
                          publicId="places/sapa_vownhc"
                          className="d-block w-100"
                          crop="scale"
                          alt="image canho"
                        />
                      </div>
                      <div>
                        <div>Sapa</div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="type_of_r_place">
                        <Image
                          cloudName="dxivl2lh5"
                          publicId="places/vungtau_zxuj4v"
                          className="d-block w-100"
                          crop="scale"
                          alt="image canho"
                        />
                      </div>
                      <div>
                        <div>V??ng t??u</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="d-flex row">
                    <div className="col">
                      <div className="type_of_r_place">
                        <Image
                          cloudName="dxivl2lh5"
                          publicId="places/danang_u845ar"
                          className="d-block w-100"
                          crop="scale"
                          alt="image canho"
                        />
                      </div>
                      <div>
                        <div>???? N???ng</div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="type_of_r_place">
                        <Image
                          cloudName="dxivl2lh5"
                          publicId="places/quynhon_eg3c8a"
                          className="d-block w-100"
                          crop="scale"
                          alt="image canho"
                        />
                      </div>
                      <div>
                        <div>Quy Nh??n</div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="type_of_r_place">
                        <Image
                          cloudName="dxivl2lh5"
                          publicId="places/quangbinh_zdr6su"
                          className="d-block w-100"
                          crop="scale"
                          alt="image canho"
                        />
                      </div>
                      <div>
                        <div>Qu???ng B??nh</div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="type_of_r_place">
                        <Image
                          cloudName="dxivl2lh5"
                          publicId="places/quangninh_zv8c1s"
                          className="d-block w-100"
                          crop="scale"
                          alt="image canho"
                        />
                      </div>
                      <div>
                        <div>Qu???ng Ninh</div>
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
        {/* Ph???n ch??? ngh??? d?????ng  */}
        <div className="justify-content-center offset-lg-2 ps-5 pb-md-5">
          <div className="fw-bold fs-3">T??m theo lo???i ch??? ngh???</div>
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
                        <Image
                          cloudName="dxivl2lh5"
                          publicId="rest/canho_iox4ez"
                          className="d-block w-100"
                          crop="scale"
                          alt="image canho"
                        />
                      </div>
                      <div>
                        <div className="fw-bold">C??n h???</div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="type_of_r_place">
                        <Image
                          cloudName="dxivl2lh5"
                          publicId="rest/khachsan_kib5dt"
                          className="d-block w-100"
                          crop="scale"
                          alt="image canho"
                        />
                      </div>
                      <div>
                        <div className="fw-bold">Kh??ch s???n</div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="type_of_r_place">
                        <Image
                          cloudName="dxivl2lh5"
                          publicId="rest/resort_hraq5u"
                          className="d-block w-100"
                          crop="scale"
                          alt="image canho"
                        />
                      </div>
                      <div>
                        <div className="fw-bold">Resort</div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="type_of_r_place">
                        <Image
                          cloudName="dxivl2lh5"
                          publicId="rest/bietthu_pkv9sm"
                          className="d-block w-100"
                          crop="scale"
                          alt="image canho"
                        />
                      </div>
                      <div>
                        <div className="fw-bold">Bi???t th???</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="d-flex row">
                    <div className="col">
                      <div className="type_of_r_place">
                        <Image
                          cloudName="dxivl2lh5"
                          publicId="rest/nha-go-cap-4-dep_qe5wjy"
                          className="d-block w-100"
                          crop="scale"
                          alt="image canho"
                        />
                      </div>
                      <div>
                        <div className="fw-bold">Nh?? g???</div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="type_of_r_place">
                        <Image
                          cloudName="dxivl2lh5"
                          publicId="rest/nha-nghi-o-que-3_rhizkm"
                          className="d-block w-100"
                          crop="scale"
                          alt="image canho"
                        />
                      </div>
                      <div>
                        <div className="fw-bold">Nh?? ngh??? th??n d??</div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="type_of_r_place">
                        <Image
                          cloudName="dxivl2lh5"
                          publicId="rest/glamping_kzu5wb"
                          className="d-block w-100"
                          crop="scale"
                          alt="image canho"
                        />
                      </div>
                      <div>
                        <div className="fw-bold">Glamping</div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="type_of_r_place">
                        <Image
                          cloudName="dxivl2lh5"
                          publicId="rest/b_b_ydiio1"
                          className="d-block w-100"
                          crop="scale"
                          alt="image canho"
                        />
                      </div>
                      <div>
                        <div className="fw-bold">Nh?? ngh??? B&B</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="d-flex row">
                    <div className="col">
                      <div className="type_of_r_place">
                        <Image
                          cloudName="dxivl2lh5"
                          publicId="rest/ryokan_zzsazk"
                          className="d-block w-100"
                          crop="scale"
                          alt="image canho"
                        />
                      </div>
                      <div>
                        <div className="fw-bold">Ryokan</div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="type_of_r_place">
                        <Image
                          cloudName="dxivl2lh5"
                          publicId="rest/riad_tboox5"
                          className="d-block w-100"
                          crop="scale"
                          alt="image canho"
                        />
                      </div>
                      <div>
                        <div className="fw-bold">Riad</div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="type_of_r_place">
                        <Image
                          cloudName="dxivl2lh5"
                          publicId="rest/khu-cam-trai_x7crhn"
                          className="d-block w-100"
                          crop="scale"
                          alt="image canho"
                        />
                      </div>
                      <div>
                        <div className="fw-bold">Khu cam trai</div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="type_of_r_place">
                        <Image
                          cloudName="dxivl2lh5"
                          publicId="rest/nha-thuyen_udvppb"
                          className="d-block w-100"
                          crop="scale"
                          alt="image canho"
                        />
                      </div>
                      <div>
                        <div className="fw-bold">Nh?? thuy???n</div>
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
