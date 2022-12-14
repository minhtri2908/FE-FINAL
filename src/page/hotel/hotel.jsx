import Header from '../../component/header/header';
import './hotel.scss';
import Footer from '../../component/Footer/Footer';
import { IoLogoNoSmoking } from 'react-icons/io';
import { BiSearch } from 'react-icons/bi';
import { GiChickenOven, GiWashingMachine } from 'react-icons/gi';
import { CiParking1 } from 'react-icons/ci';
import { FaBed, FaCity, FaShower } from 'react-icons/fa';
import { MdBalcony, MdEmojiNature, MdFamilyRestroom } from 'react-icons/md';
import { AiOutlineCalendar, AiOutlineFieldTime } from 'react-icons/ai';
import { SiGooglemaps } from 'react-icons/si';
import { FcCheckmark } from 'react-icons/fc';
import { BsWifi, BsSnow } from 'react-icons/bs';
import { GoLocation } from 'react-icons/go';
import { RiSecurePaymentLine, RiErrorWarningLine } from 'react-icons/ri';
import format from 'date-fns/format';
import { DateRange, DateRangePicker } from 'react-date-range';
import { useState } from 'react';
import { useEffect } from 'react';
import { MDBCheckbox } from 'mdb-react-ui-kit';
import { Image } from 'cloudinary-react';
import {
  faBed,
  faCalendarDays,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Searchresult_app() {
  const [OpenDate, setOpenDate] = useState(false);
  useEffect(() => {
    const closecalendar = (e) => {
      if (e.path[0].tagName !== 'SPAN') {
        setOpenDate(false);
      }
    };
    document.body.addEventListener('click', closecalendar);
    return () => document.body.removeEventListener('click', closecalendar);
  }, []);
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
      <div className="content w-100 d-flex content-hotel-page">
        <div className="d-flex w-75 my-4">
          <div className="w-25 ">
            {/* Ph???n b???ng t??m ki???m  */}
            <div className="setbackgroundsearch">
              <div className="search">
                <div>T??n ch??? ngh??? / ??i???m ?????n:</div>
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    <BiSearch />
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="?????a danh"
                    aria-describedby="basic-addon1"
                  />
                </div>
                <div>Ng??y nh???n ph??ng</div>
                <div className="input-group mb-3" type="button">
                  <span className="input-group-text" id="basic-addon1">
                    <AiOutlineCalendar />
                  </span>
                  <span
                    onClick={() => setOpenDate((prev) => !prev)}
                    className="headerSearchText form-control"
                  >
                    {`${format(date[0].startDate, 'MM/dd/yyyy')}`}
                  </span>
                </div>
                <div>Ng??y tr??? ph??ng</div>
                <div className="input-group mb-3 " type="button">
                  <span className="input-group-text" id="basic-addon1">
                    <AiOutlineCalendar />
                  </span>
                  <span
                    onClick={() => setOpenDate(!OpenDate)}
                    className="headerSearchText form-control"
                  >
                    {`${format(date[0].endDate, 'MM/dd/yyyy')} `}
                  </span>
                </div>
                {OpenDate && (
                  <DateRangePicker
                    onChange={(item) => setDate([item.selection])}
                    showSelectionPreview={true}
                    moveRangeOnFirstSelection={false}
                    months={2}
                    ranges={date}
                    direction="horizontal"
                    className="date date_location"
                  />
                )}
                <div>S??? th??nh vi??n v?? s??? ph??ng</div>
                <div className="input-group mb-3" type="button">
                  <span className="input-group-text" id="basic-addon1">
                    <FaBed />
                  </span>
                  <span
                    onClick={() => setChoosePeople(!ChoosePeople)}
                    className="headerSearchText form-control"
                  >{`${People.Adult} Ng?????i l???n - ${People.Children} Tr??? em - ${People.Room} Ph??ng`}</span>
                  {ChoosePeople && (
                    <div className="people">
                      <div className="peopleItem ">
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
                <div>
                  <MDBCheckbox
                    name="flexCheck"
                    value=""
                    id="flexCheckDefault"
                    label="Nh?? v?? c??n h??? nguy??n c??n"
                  />
                </div>
                <div>
                  <MDBCheckbox
                    name="flexCheck1"
                    value="1"
                    id="flexCheckDefault1"
                    label="T??i ??i c??ng t??c"
                  />
                </div>
                <button className="btn btn-primary input-group " type="submit">
                  T??m
                </button>
              </div>
            </div>
          </div>
          {/* Th??ng tin hotel */}
          <div className="w-75 ">
            <div className="m-4">
              <div className=" m-2 d-flex">
                <div className="w-75">
                  <div className=" h4 d-block mx-2">
                    <span>t??n ?????a ??i???m</span>
                  </div>
                  <div className=" d-block mx-2">
                    <SiGooglemaps />
                    <span>?????a ch??? chi nh??nh</span>
                  </div>
                </div>
                <div className=" w-25">
                  <button type="button" class="btn btn-primary">
                    ?????t ph??ng theo nhu c???u
                  </button>
                </div>
              </div>
              {/* description picture */}
              <div className="description_picture">
                <div className="d-flex">
                  <div className=" description_picture_left">
                    <span>
                      <Image
                        cloudName="dxivl2lh5"
                        publicId="rest/nha-go-cap-4-dep_qe5wjy"
                        className="col w-100"
                        crop="scale"
                        alt="image canho"
                      />
                    </span>
                    <span>
                      <Image
                        cloudName="dxivl2lh5"
                        publicId="rest/nha-nghi-o-que-3_rhizkm"
                        className="col w-100"
                        crop="scale"
                        alt="image canho"
                      />
                    </span>
                  </div>
                  <div className="description_picture_right">
                    <span>
                      <Image
                        cloudName="dxivl2lh5"
                        publicId="rest/glamping_kzu5wb"
                        className="col w-100"
                        crop="scale"
                        alt="image canho"
                      />
                    </span>
                  </div>
                </div>
                <div className="col d-flex">
                  <span>
                    <Image
                      cloudName="dxivl2lh5"
                      publicId="rest/nha-go-cap-4-dep_qe5wjy"
                      className="col w-100"
                      crop="scale"
                      alt="image canho"
                    />
                  </span>
                  <span>
                    <Image
                      cloudName="dxivl2lh5"
                      publicId="rest/nha-nghi-o-que-3_rhizkm"
                      className="col w-100"
                      crop="scale"
                      alt="image canho"
                    />
                  </span>
                  <span>
                    <Image
                      cloudName="dxivl2lh5"
                      publicId="rest/nha-go-cap-4-dep_qe5wjy"
                      className="col w-100"
                      crop="scale"
                      alt="image canho"
                    />
                  </span>
                  <span>
                    <Image
                      cloudName="dxivl2lh5"
                      publicId="rest/nha-nghi-o-que-3_rhizkm"
                      className="col w-100"
                      crop="scale"
                      alt="image canho"
                    />
                  </span>
                  <span>
                    <Image
                      cloudName="dxivl2lh5"
                      publicId="rest/nha-nghi-o-que-3_rhizkm"
                      className="col w-100"
                      crop="scale"
                      alt="image canho"
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content content-hotel-page w-75 ms-md-4">
        <div className="d-flex mb-3 ">
          <div className=" flex-fill border">
            <div className="m-3 d-flex">
              <GiChickenOven />
              <div className="mx-2"> B???p </div>
            </div>
          </div>
          <div className="flex-fill  border mx-md-3 ">
            <div className="m-3 d-flex">
              <FaCity />
              <div className="mx-2"> Nh??n ra th??nh ph???</div>
            </div>
          </div>
          <div className=" flex-fill border">
            <div className="m-3 d-flex">
              <GiWashingMachine />
              <div className="mx-2 "> M??y gi???t </div>
            </div>
          </div>
          <div className="flex-fill border mx-md-3 ">
            <div className="m-3 d-flex">
              <BsWifi />
              <div className="mx-2 "> Wifi mi???n ph?? </div>
            </div>
          </div>
          <div className="flex-fill  border">
            <div className="m-3 d-flex">
              <MdEmojiNature />
              <div className="mx-2 "> S??n hi??n </div>
            </div>
          </div>
          <div className="flex-fill border mx-md-3 ">
            <div className="m-3 d-flex">
              <MdBalcony />
              <div className="mx-2 "> Ban c??ng </div>
            </div>
          </div>
        </div>
        <div className="d-flex mb-3 ">
          <div className=" flex-fill border ">
            <div className="m-3 d-flex">
              <BsSnow />
              <div className="mx-2"> ??i???u h??a kh??ng kh?? </div>
            </div>
          </div>
          <div className="flex-fill  border mx-md-3 ">
            <div className="m-3 d-flex">
              <FaShower />
              <div className="mx-2"> Ph??ng t???m ri??ng</div>
            </div>
          </div>
          <div className=" flex-fill border">
            <div className="m-3 d-flex">
              <AiOutlineFieldTime />
              <div className="mx-2 "> L?? t??n 24 gi??? </div>
            </div>
          </div>
          <div className="flex-fill border mx-md-3 ">
            <div className="m-3 d-flex">
              <RiSecurePaymentLine />
              <div className="mx-2 "> ??? kh??a m??? b???ng th??? </div>
            </div>
          </div>
        </div>
        <div className="d-flex mb-3 flex-nowrap">
          <div className=" p-2 order-1 w-100  shadow">
            <pre>{`N???m ??? th??nh ph??? V??ng T??u, c??ch B??i Sau 700 m v?? B??i Tr?????c 1,8 km, Vung Tau Melody Apartment
cung c???p ch??? ngh??? v???i WiFi mi???n ph?? v?? khu v???c gh??? ng???i.
T???t c??? c??c c??n t???i ????y ?????u ???????c b??? tr?? m??y ??i???u h??a, TV m??n h??nh ph???ng, ph??ng kh??ch v???i gh??? sofa, 
b???p ??n ?????y ????? ti???n nghi ??i k??m khu v???c ??n
u???ng v?? ph??ng t???m ri??ng v???i vo??i sen, ??o cho??ng t???m c??ng de??p ??i trong pho??ng. C??c c??n c??n ???????c trang
b??? l?? vi s??ng, t??? l???nh, b???p n???u ??n v?? ???m ??un n?????c.
C??n h??? c?? s??n hi??n.
B??i D???a n???m trong b??n k??nh 2,7 km t??? Vung Tau Melody Apartment trong khi M??i Nghinh Phong c??ch ???? 
2,4 km. S??n bay g???n nh???t l?? S??n bay V??ng T??u,c??ch ch??? ngh??? 6 km.
C??c c???p ????i ?????c bi???t th??ch ?????a ??i???m n??y ??? h??? cho ??i???m 8,9 cho k??? ngh??? d??nh cho 2 ng?????i.
Vung Tau Melody Apartment ???? ch??o ????n kh??ch Booking.com t??? 23 th??ng 4 2019.`}</pre>
            <div>
              <strong>
                Vung Tau Melody Apartment ???? ch??o ????n kh??ch Booking.com t??? 23
                th??ng 4 2019.
              </strong>
            </div>
            <div>
              <strong>C??c ti???n nghi ???????c ??a chu???ng nh???t: </strong>
            </div>
            <div className="d-flex">
              <div className="mx-2">
                <BsWifi /> Wifi mi???n ph??
              </div>
              <div className="mx-2">
                <CiParking1 /> Ch??? ?????u xe
              </div>
              <div className="mx-2">
                <MdFamilyRestroom /> Ph??ng gia ????nh
              </div>
              <div className="mx-2">
                <IoLogoNoSmoking /> Ph??ng kh??ng h??t thu???c l??
              </div>
            </div>
          </div>
          <div className="order-2 flex-shrink-1 ">
            <div className="p-3 shadow mx-md-3 mb-3 bg-custom-1">
              <div className="">
                <div className="fw-bold mb-3 ">??i???m n???i b???t c???a ch??? ngh???</div>
                <div className="d-flex mb-3">
                  <GoLocation />
                  <div className="mx-2">?????a ??i???m h??ng ?????u ch???t l?????ng cao</div>
                </div>
                <div className="d-flex mb-3">
                  <CiParking1 />
                  <div className="mx-2">C?? ch??? ?????u xe trong khu??n vi??n</div>
                </div>
                <button
                  className="btn btn-primary input-group mt-3 "
                  type="submit"
                >
                  ?????t ngay
                </button>
              </div>
            </div>
            <div className=" p-3 mx-md-3 shadow bg-custom-1 ">
              <div className="d-flex">
                <FcCheckmark />
                <div className="mx-2 color-text-green">Th??ng tin uy t??n</div>
              </div>
              <div className="d-block mx-2">
                Kh??ch n??i r???ng m?? t??? v?? h??nh ???nh ch??? ngh??? n??y{' '}
                <strong>????ng v???i s??? th???t.</strong>
              </div>
            </div>
          </div>
        </div>
        <div className="border-bottom mb-5"></div>
      </div>
      <div className=" content-hotel-page w-75 ms-md-4">
        <div className="h4">Ph??ng tr???ng</div>
        <div className="mark d-flex w-75">
          <div type="button" className="mx-2 flex-fill text-bg-info">
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
          <div className="mx-2 flex-fill text-bg-info">
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
          <button type="button" className="btn btn-light" >Thay ?????i t??m ki???m</button>
         
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Searchresult_app;
