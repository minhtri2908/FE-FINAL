import Header from '../../component/header/header';
import './hotel.scss';
import Footer from '../../component/Footer/Footer';
import { BiSearch } from 'react-icons/bi';
import { FaBed, FaLeaf } from 'react-icons/fa';
import { AiOutlineCalendar } from 'react-icons/ai';
import { SiGooglemaps } from 'react-icons/si';
import format from 'date-fns/format';
import { DateRange, DateRangePicker } from 'react-date-range';
import { useState } from 'react';
import { useEffect } from 'react';
import { MDBCheckbox } from 'mdb-react-ui-kit';
import nhago from '../../image/nha-go-cap-4-dep.jpg';
import nhanghithonda from '../../image/nha-nghi-o-que-3.jpg';
import glamping from '../../image/glamping.jpg';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
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
  const {} = useLoadScript({googleMapsApiKey: ""})
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
            <div style={{ height: '11rem', width: '100%' }}></div>
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
                      <img className="col w-100" src={nhago} alt="" />
                    </span>
                    <span>
                      <img className="col w-100" src={nhanghithonda} alt="" />
                    </span>
                  </div>
                  <div className="description_picture_right">
                    <span>
                      <img className="col w-100 " src={glamping} alt="" />
                    </span>
                  </div>
                </div>
                <div className="col d-flex">
                  <span>
                    <img className="col w-100" src={nhago} alt="" />
                  </span>
                  <span>
                    <img className="col w-100" src={nhanghithonda} alt="" />
                  </span>
                  <span>
                    <img className="col w-100" src={nhago} alt="" />
                  </span>
                  <span>
                    <img className="col w-100" src={nhanghithonda} alt="" />
                  </span>
                  <span>
                    <img className="col w-100" src={nhanghithonda} alt="" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default Searchresult_app;
