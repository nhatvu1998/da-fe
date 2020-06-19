import React from 'react'
import logo1688 from '../../assets/images/1688-icon.png'
import logoTaobao from '../../assets/images/taobao-icon.png'
import logoTmall from '../../assets/images/tmall-icon.png'
import { Icon } from 'tabler-react'
import { Progress } from 'antd'

const Home = () => {
  return (
    <div>
      <div id="page-top">
        {/* Masthead*/}
        <header className="masthead">
          <div className="container h-100">
            <div className="row h-100 align-items-center justify-content-center text-center">
              <div className="col-lg-10 align-self-end">
                <h1 className="text-uppercase text-white font-weight-bold">
                  Welcome to EasyBuy
                </h1>
                <hr className="divider my-4" />
              </div>
              <div className="col-lg-8 align-self-baseline">
                <p className="text-white-75 font-weight-light mb-5">
                  Giải pháp đặt hàng TQ-VN hàng đầu
                </p>
                <div className="row align-items-center justify-content-center text-center">
                  <div className="btn btn-primary btn-xl js-scroll-trigger ">
                    Cài đặt công cụ
                  </div>
                  <div
                    className="btn btn-primary btn-xl js-scroll-trigger"
                    href="#about"
                  >
                    Cài đặt công cụ
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
      {/* Services section*/}
      <section className="page-section" id="services">
        <div className="container">
          <h2 className="text-center mt-0">Nguồn hàng phong phú</h2>
          <hr className="divider my-4" />
          <div className="row">
            <div className="col-lg-4 col-md-12 price-table">
              <div className="price-box">
                <h5>
                  <strong>1688</strong>
                </h5>
                <a href="http://1688.com" target="blank">
                  <img src={logo1688} alt="" />
                </a>
                <div className="pt-5">
                  <p>Website bán buôn lớn nhất Trung Quốc.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-12 price-table">
              <div className="price-box">
                <h5>
                  <strong>Tmall</strong>
                </h5>
                <a href="http://1688.com" target="blank">
                  <img src={logoTmall} alt="" />
                </a>
                <div className="pt-5">
                  <p>
                    Website chuyên hàng hiệu, chính hãng chất lượng lớn nhất TQ.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-12 price-table">
              <div className="price-box">
                <h5>
                  <strong>Tao bao</strong>
                </h5>
                <a href="http://1688.com" target="blank">
                  <img src={logoTaobao} alt="" />
                </a>
                <div className="pt-5">
                  <p>Website bán lẻ lớn nhất Trung Quốc.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Portfolio section*/}
      <section className="page-section" id="services">
        <div className="container">
          <h2 className="text-center">DỊCH VỤ EASYBUY</h2>
          <hr className="divider my-4" />
          <div className="row">
            <div className="col-md-4 col-sm-6">
              <div className="front-icon">
                <Icon name="search" />
              </div>
              <div className="back-icon">
                <Icon name="search" />
              </div>
              <div className="feature-left">
                <h4>
                  <strong>Tìm nguồn hàng</strong>
                </h4>
                <p>
                  Bạn là chủ shop, bạn cần tìm nguồn hàng giá sỉ, chúng tôi sẽ
                  tìm nguồn hàng với giá xưởng cho bạn.
                </p>
              </div>
            </div>

            <div className="col-md-4 col-sm-6">
              <div className="front-icon">
                <Icon name="truck" />
              </div>
              <div className="back-icon">
                <Icon name="truck" />
              </div>
              <div className="feature-left">
                <h4>
                  <strong>Vận chuyển hàng hóa</strong>
                </h4>
                <p>
                  Bạn có hàng và cần chuyển qua lại Việt - Trung, chúng tôi sẽ
                  vận chuyển về kho cho bạn.
                </p>
              </div>
            </div>

            <div className="col-md-4 col-sm-6">
              <div className="front-icon">
                <Icon name="dollar-sign" />
              </div>
              <div className="back-icon">
                <Icon name="dollar-sign" />
              </div>
              <div className="feature-left">
                <h4>
                  <strong>Chuyển đổi tiền tệ</strong>
                </h4>
                <p>Chuyển đổi tiền tệ Việt - Trung với giá tối ưu nhất.</p>
              </div>
            </div>

            <div className="col-md-4 col-sm-6">
              <div className="front-icon">
                <Icon payment name="visa" />
              </div>
              <div className="back-icon">
                <Icon payment name="visa" />
              </div>
              <div className="feature-left">
                <h4>
                  <strong>Phiên dịch - Visa</strong>
                </h4>
                <p>
                  Bạn cần sang Trung Quốc, công tác, du lịch, vui chơi, hãy liên
                  lạc với chúng tôi.
                </p>
              </div>
            </div>

            <div className="col-md-4 col-sm-6">
              <div className="front-icon">
                <Icon name="shopping-cart" />
              </div>
              <div className="back-icon">
                <Icon name="shopping-cart" />
              </div>
              <div className="feature-left">
                <h4>
                  <strong>Mua hàng trong vòng 24h</strong>
                </h4>
                <p>
                  Đảm bảo hàng của Quý khách được mua sớm nhất trong vòng 24h kể
                  từ khi đặt cọc.
                </p>
              </div>
            </div>

            <div className="col-md-4 col-sm-6">
              <div className="front-icon">
                <Icon name="life-buoy" />
              </div>
              <div className="back-icon">
                <Icon name="life-buoy" />
              </div>
              <div className="feature-left">
                <h4>
                  <strong>Hỗ trợ 24h</strong>
                </h4>
                <p>
                  Luôn sẵn sàng hỗ trợ Quý khách nhanh nhất. Mọi lúc - mọi nơi
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact section*/}
      <section className="page-section" id="contact">
        <div className="container">
          <div className="row vertical-align">
            <div className="col-md-6">
              <h3>
                <strong>Đến với chúng tôi</strong>
                <br />
                <span className="color">Cùng chia sẻ quyền lợi</span>
              </h3>
              <p>
                Với trang thiết bị hiện đại, cùng với quy trình quản lý chuyên
                nghiệp, đội ngũ nhân viên trẻ trung - năng động - kinh nghiệm,
                công ty ALIVIET mang đến dịch vụ uy tín, tiến độ giao hàng đảm
                bảo, giá thành hợp lý nhằm đáp ứng yêu cầu và nhu cầu khác nhau
                của khách hàng.{" "}
              </p>
              <p>
                Với phương châm “ Hợp tác để cùng thành công”, và định hướng
                “Liên tục cải tiến”. ALIVIET đã luôn nỗ lực cả về nhân lực, vật
                lực, xây dựng uy tín thương hiệu, niềm tin với khách hàng với
                những dịch vụ chúng tôi cung cấp.
              </p>
            </div>
            <div className="col-md-6">
              <div
                className="progress-bars standard transparent-bars"
                data-animate-on-scroll="on"
              >
                <h5 className="bold">Xây dựng thương hiệu</h5>
                <Progress
                  strokeColor={{
                    "0%": "#108ee9",
                    "100%": "#87d068",
                  }}
                  percent={30}
                  status="active"
                />
                <h5 className="bold">Kinh nghiệm người dùng</h5>
                <Progress
                  strokeColor={{
                    "0%": "#108ee9",
                    "100%": "#87d068",
                  }}
                  percent={60}
                  status="active"
                />
                <h5 className="bold">Hoàn thiện hệ thống</h5>
                <Progress
                  strokeColor={{
                    "0%": "#108ee9",
                    "100%": "#87d068",
                  }}
                  percent={70}
                  status="active"
                />
                <h5 className="bold">Khách hàng hài lòng</h5>
                <Progress
                  strokeColor={{
                    "0%": "#108ee9",
                    "100%": "#87d068",
                  }}
                  percent={90}
                  status="active"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------- */}

      <section className="page-section" id="services">
        <div className="container">
          <h2 className="text-center">Tại sao nên chọn chúng tôi?</h2>
          <hr className="divider my-4" />
          <div className="row">
            <div className="col-md-4">
              <div className="front-icon">
                <Icon name="thumbs-up" />
              </div>
              <div className="back-icon">
                <Icon name="thumbs-up" />
              </div>
              <div className="feature-left">
                <h4>
                  <strong>Dịch vụ chuyên nghiệp</strong>
                </h4>
                <p>
                  EasyBuy luôn cố gắng, không ngừng phát triển hơn nữa, để đem
                  tới sự hài lòng dịch vụ, giải pháp công nghệ tốt nhất tới cho
                  khách hàng
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="front-icon">
                <Icon name="grid" />
              </div>
              <div className="back-icon">
                <Icon name="grid" />
              </div>
              <div className="feature-left">
                <h4>
                  <strong>Quản lý thông minh</strong>
                </h4>
                <p>
                  Hệ thống quản lý thông minh giúp khách hàng đặt hàng chính
                  xác, đơn giản, nhanh chóng và theo dõi đơn hàng dễ dàng
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="front-icon">
                <Icon name="compass" />
              </div>
              <div className="back-icon">
                <Icon name="compass" />
              </div>
              <div className="feature-left">
                <h4>
                  <strong>Hỗ trợ nhiệt tình</strong>
                </h4>
                <p>
                  Đội ngũ chăm sóc khách hàng của chúng tôi luôn sẵn sàng và đưa
                  ra các tư vấn chuyên nghiệp tới khách hàng
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================= */}

      <section className="parallax">
        <div className="container-fluid h-100 masthead">
          <div className="row h-100 align-items-center justify-content-center text-center">
            <div className="col-lg-10 align-self-end">
              <h2 className="text-uppercase text-white font-weight-bold">
                Quy trình đặt và giao nhận hàng
              </h2>
            </div>
            <div className="col-lg-12 align-self-baseline">
              <p className="text-white-75 font-weight-light mb-5">
                Quy trình đảm bảo đúng thứ tự
              </p>
            </div>

            <div className="col-lg-2 col-md-4 col-sm-6">
              <Icon name="search"></Icon>
              <p>B1: Chọn hàng</p>
            </div>

            <div className="col-lg-2 col-md-4 col-sm-6">
              <Icon name="dollar-sign"></Icon>
              <p>B2: Đặt cọc tiền</p>
            </div>

            <div className="col-lg-2 col-md-4 col-sm-6">
              <Icon name="shopping-cart"></Icon>
              <p>B3: Mua hàng</p>
            </div>

            <div className="col-lg-2 col-md-4 col-sm-6">
              <Icon name="truck"></Icon>
              <p>B4: Vận chuyển</p>
            </div>

            <div className="col-lg-2 col-md-4 col-sm-6">
              <Icon name="user-check"></Icon>
              <p>B5: Kiểm tra hàng</p>
            </div>

            <div className="col-lg-2 col-md-4 col-sm-6">
              <Icon name="user"></Icon>
              <p>B6: Nhận hàng</p>
            </div>
          </div>
        </div>
      </section>
      {/* ============================ */}

      <section className="page-section" id="contact">
        <div className="container">
          <div className="row vertical-align">
            <div className="col-md-6">
              <h3>
                <strong>Hướng dẫn cài đặt công cụ và đặt hàng</strong>
              </h3>
              <p>
                Chuyên cung cấp dịch vụ đặt hàng, vận chuyển và phân phối hàng
                hóa Trung Quốc về Việt Nam. Với hệ thống website thông minh, bạn
                có thể tự lựa chọn sản phẩm, tìm kiếm nguồn hàng, đặt hàng dễ
                dàng, chính xác, đồng thời theo dõi được tình trạng đơn hàng của
                mình. Chúng tôi có hệ thống nhiều chi nhánh, đội ngũ chuyên viên
                nhiệt tình luôn sẵn sàng phục vụ, tốc độ vận chuyển nhanh chóng,
                giá cả cạnh tranh
              </p>
              <p>
                Easybuy không ngừng nỗ lực phấn đấu và phát triển để trở thành
                top 20 doanh nghiệp hàng đầu về lĩnh vực vận chuyển hàng hóa,
                quản lý hàng hóa qua hệ thống Logistics.
              </p>
            </div>
            <div className="col-md-6">
              <p>video here</p>
            </div>
          </div>
        </div>
      </section>
      {/* =============== */}
      <section className="page-section">
        <div className="container-fluid h-100 align-items-center justify-content-center text-center">
          <iframe
            title='map'
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d20167.80496849444!2d108.18998721104336!3d16.05665869893293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1586969386971!5m2!1svi!2s"
            width="100%"
            height={600}
            frameBorder={0}
            style={{ border: 0 }}
            allowFullScreen
            aria-hidden="false"
            tabIndex={0}
          />
        </div>
      </section>
    </div>
  );
}

export default Home
