import Loginform from '../../component/Form/LoginForm';
import Header from '../../component/header/header';
import './searchresult.scss';
import { Button } from 'react-bootstrap';
import Footer from '../../component/Footer/Footer';
import { BiSearch } from 'react-icons/bi';
import { FaBed, FaLeaf } from 'react-icons/fa';
import { TbBeach } from 'react-icons/tb';
import { AiOutlineCalendar } from 'react-icons/ai';
import format from 'date-fns/format';
import { DateRange, DateRangePicker } from 'react-date-range';
import { useState } from 'react';
import { MDBCheckbox } from 'mdb-react-ui-kit';
import imageroomhotel from '../../image/234762091.jpg';
import { Link } from 'react-router-dom';
function Searchresult_app() {
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
      <div className="content container d-flex">
        <div className="w-25 setbackgroundsearch ">
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
                onClick={() => setOpenDate(!OpenDate)}
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
        <div className="w-75 ">
          <div className="m-4">
            <div>
              <div className=" h4 d-block mx-2">
                <span>Địa điểm</span> : Tìm thấy <span> (số lượng) </span> Chi
                nhánh
              </div>
              <div className=" h5 d-block mx-2">
                Những điểm thăm quan gần đó: ....
              </div>
            </div>
            <div className="shadow item-hotel ">
              <div className="d-flex m-2">
                <img
                  className="w-25"
                  src={imageroomhotel}
                  alt="hình ảnh phòng"
                />
                <div className="m-2 w-75">
                  <div className="d-flex">
                    <div className="w-75">
                      <div className="h2"> Tên chi nhánh </div>
                      <div> Khoảng cách trung tâm</div>
                      <div>
                        <TbBeach /> <span> Giáp biển</span>
                      </div>
                      <div>
                        <FaLeaf /> <span>Chỗ nghỉ du lịch </span>
                      </div>
                    </div>
                    <div className="w-25">
                      <div className="d-flex">
                        <div>Tuyệt vời</div>
                        <div>9.0</div>
                      </div>
                      <div>
                        <a>Thoái mái 9.0</a>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="fs-6 w-75">
                      MÔ TẢ CHỖ NGHỈ THEO TÌM KIẾM CỦA KHÁCH HÀNG
                    </div>
                    <div className="w-25">
                      <div>
                        <span>1.000.000</span> VND
                      </div>
                      <Link to="../hotel">
                        <button type="button" class="btn btn-primary">
                          Xem chỗ trống
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Searchresult_app;
