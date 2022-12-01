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
            {/* Phần bảng tìm kiếm  */}
            <div className="setbackgroundsearch">
              <div className="search">
                <div>Tên chỗ nghỉ / điểm đến:</div>
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    <BiSearch />
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Địa danh"
                    aria-describedby="basic-addon1"
                  />
                </div>
                <div>Ngày nhận phòng</div>
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
                <div>Ngày trả phòng</div>
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
                <div>Số thành viên và số phòng</div>
                <div className="input-group mb-3" type="button">
                  <span className="input-group-text" id="basic-addon1">
                    <FaBed />
                  </span>
                  <span
                    onClick={() => setChoosePeople(!ChoosePeople)}
                    className="headerSearchText form-control"
                  >{`${People.Adult} Người lớn - ${People.Children} Trẻ em - ${People.Room} Phòng`}</span>
                  {ChoosePeople && (
                    <div className="people">
                      <div className="peopleItem ">
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
                <div>
                  <MDBCheckbox
                    name="flexCheck"
                    value=""
                    id="flexCheckDefault"
                    label="Nhà và căn hộ nguyên căn"
                  />
                </div>
                <div>
                  <MDBCheckbox
                    name="flexCheck1"
                    value="1"
                    id="flexCheckDefault1"
                    label="Tôi đi công tác"
                  />
                </div>
                <button className="btn btn-primary input-group " type="submit">
                  Tìm
                </button>
              </div>
            </div>
          </div>
          {/* Thông tin hotel */}
          <div className="w-75 ">
            <div className="m-4">
              <div className=" m-2 d-flex">
                <div className="w-75">
                  <div className=" h4 d-block mx-2">
                    <span>tên địa điểm</span>
                  </div>
                  <div className=" d-block mx-2">
                    <SiGooglemaps />
                    <span>Địa chỉ chi nhánh</span>
                  </div>
                </div>
                <div className=" w-25">
                  <button type="button" class="btn btn-primary">
                    Đặt phòng theo nhu cầu
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
              <div className="mx-2"> Bếp </div>
            </div>
          </div>
          <div className="flex-fill  border mx-md-3 ">
            <div className="m-3 d-flex">
              <FaCity />
              <div className="mx-2"> Nhìn ra thành phố</div>
            </div>
          </div>
          <div className=" flex-fill border">
            <div className="m-3 d-flex">
              <GiWashingMachine />
              <div className="mx-2 "> Máy giặt </div>
            </div>
          </div>
          <div className="flex-fill border mx-md-3 ">
            <div className="m-3 d-flex">
              <BsWifi />
              <div className="mx-2 "> Wifi miễn phí </div>
            </div>
          </div>
          <div className="flex-fill  border">
            <div className="m-3 d-flex">
              <MdEmojiNature />
              <div className="mx-2 "> Sân hiên </div>
            </div>
          </div>
          <div className="flex-fill border mx-md-3 ">
            <div className="m-3 d-flex">
              <MdBalcony />
              <div className="mx-2 "> Ban công </div>
            </div>
          </div>
        </div>
        <div className="d-flex mb-3 ">
          <div className=" flex-fill border ">
            <div className="m-3 d-flex">
              <BsSnow />
              <div className="mx-2"> Điều hòa không khí </div>
            </div>
          </div>
          <div className="flex-fill  border mx-md-3 ">
            <div className="m-3 d-flex">
              <FaShower />
              <div className="mx-2"> Phòng tắm riêng</div>
            </div>
          </div>
          <div className=" flex-fill border">
            <div className="m-3 d-flex">
              <AiOutlineFieldTime />
              <div className="mx-2 "> Lê tân 24 giờ </div>
            </div>
          </div>
          <div className="flex-fill border mx-md-3 ">
            <div className="m-3 d-flex">
              <RiSecurePaymentLine />
              <div className="mx-2 "> Ổ khóa mở bằng thẻ </div>
            </div>
          </div>
        </div>
        <div className="d-flex mb-3 flex-nowrap">
          <div className=" p-2 order-1 w-100  shadow">
            <pre>{`Nằm ở thành phố Vũng Tàu, cách Bãi Sau 700 m và Bãi Trước 1,8 km, Vung Tau Melody Apartment
cung cấp chỗ nghỉ với WiFi miễn phí và khu vực ghế ngồi.
Tất cả các căn tại đây đều được bố trí máy điều hòa, TV màn hình phẳng, phòng khách với ghế sofa, 
bếp ăn đầy đủ tiện nghi đi kèm khu vực ăn
uống và phòng tắm riêng với vòi sen, áo choàng tắm cùng dép đi trong phòng. Các căn còn được trang
bị lò vi sóng, tủ lạnh, bếp nấu ăn và ấm đun nước.
Căn hộ có sân hiên.
Bãi Dứa nằm trong bán kính 2,7 km từ Vung Tau Melody Apartment trong khi Mũi Nghinh Phong cách đó 
2,4 km. Sân bay gần nhất là Sân bay Vũng Tàu,cách chỗ nghỉ 6 km.
Các cặp đôi đặc biệt thích địa điểm này — họ cho điểm 8,9 cho kỳ nghỉ dành cho 2 người.
Vung Tau Melody Apartment đã chào đón khách Booking.com từ 23 tháng 4 2019.`}</pre>
            <div>
              <strong>
                Vung Tau Melody Apartment đã chào đón khách Booking.com từ 23
                tháng 4 2019.
              </strong>
            </div>
            <div>
              <strong>Các tiện nghi được ưa chuộng nhất: </strong>
            </div>
            <div className="d-flex">
              <div className="mx-2">
                <BsWifi /> Wifi miễn phí
              </div>
              <div className="mx-2">
                <CiParking1 /> Chỗ đậu xe
              </div>
              <div className="mx-2">
                <MdFamilyRestroom /> Phòng gia đình
              </div>
              <div className="mx-2">
                <IoLogoNoSmoking /> Phòng không hút thuốc lá
              </div>
            </div>
          </div>
          <div className="order-2 flex-shrink-1 ">
            <div className="p-3 shadow mx-md-3 mb-3 bg-custom-1">
              <div className="">
                <div className="fw-bold mb-3 ">Điểm nổi bật của chỗ nghỉ</div>
                <div className="d-flex mb-3">
                  <GoLocation />
                  <div className="mx-2">Địa điểm hàng đầu chất lượng cao</div>
                </div>
                <div className="d-flex mb-3">
                  <CiParking1 />
                  <div className="mx-2">Có chỗ đậu xe trong khuôn viên</div>
                </div>
                <button
                  className="btn btn-primary input-group mt-3 "
                  type="submit"
                >
                  Đặt ngay
                </button>
              </div>
            </div>
            <div className=" p-3 mx-md-3 shadow bg-custom-1 ">
              <div className="d-flex">
                <FcCheckmark />
                <div className="mx-2 color-text-green">Thông tin uy tín</div>
              </div>
              <div className="d-block mx-2">
                Khách nói rằng mô tả và hình ảnh chỗ nghỉ này{' '}
                <strong>đúng với sự thật.</strong>
              </div>
            </div>
          </div>
        </div>
        <div className="border-bottom mb-5"></div>
      </div>
      <div className=" content-hotel-page w-75 ms-md-4">
        <div className="h4">Phòng trống</div>
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
          <button type="button" className="btn btn-light" >Thay đổi tìm kiếm</button>
         
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Searchresult_app;
