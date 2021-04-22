import React, { useState } from 'react';
import "./home.css";
import "./animate.css";
import { WOW } from 'wowjs';
import Carousel from 'react-bootstrap/Carousel';
import immutability from "../Images/immutability.png";
import pControl from "../Images/processControl.png";
import cConfidence from "../Images/customerConfidence.png";
import traceable from "../Images/trace.png";
import curve from "../Images/curve.png";
import timeline from "../Images/timeline.png";
import cart from "../Images/cart2.png";
import pr1 from "../Images/process1.png";
import pr2 from "../Images/process2.png";
import pr3 from "../Images/process3.png";
import pr4 from "../Images/process4.png";
import pr5 from "../Images/process5.png";
import pr6 from "../Images/process6.png";
import quality from "../Images/quality.png";
import stable from "../Images/stable.png";
import eco from "../Images/eco.png";
import multi from "../Images/multi.png";

new WOW({ live: false }).init();

function Home(props) {

  const [input, setInput] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    props.history.push(`/batchInfo/${input}`);
    setInput('');
  }

  return (

    <body>

      {/* The first page -- Search Bar -----------------------------------------------------------------------------*/}
      <div className="searchBlock" id="serachBlock">
        <div className="container-1">
          <div className="animated jello">
            <h1 className="font" >Trusty Tracker</h1>
            <p className="font2" >Blockchain solution for safe food resume</p>

            {/* <p class="font">Please enter the number of the product to view its production history</p> */}
          </div>
          <br />

          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input className="form-control bar" name="input" type="text" placeholder="請輸入產品編號" onChange={(e) => setInput(e.target.value)} value={input} required />
              <br />
              <div className="input-group-btn">
                <input className="form-control button" type="submit" value="Search" id="icon" />
              </div>
            </div>
          </form>
        </div>
      </div>


      {/* The second page -- About Trusty Tracker  --------------------------------------------------------------------*/}
      <div className="test" id="aboutUs">

        <div className="block">
          <h4 className="testSubTitle">守護食品安全</h4>

          <h1 className="testTitle wow jello">Introducing Trusty Tracker</h1>

          <p className="testPara wow slideInUp">近幾年來食安問題頻傳，我們希望能夠針對農產品推出一個可信的產銷履歷系統，
					 將農產品從農場到賣場再到消費者手中之間的每一個流程完整地記錄下來，Trusty Tracker 因而誕生！
					 消費者可以透過特定的編號追蹤並得知該產品在購買之前的所有歷程記錄。
     </p>
        </div>
      </div>
      <img alt='this is a curve' src={curve} className="curveSize" ></img>


      {/* The third page -- Explain Ethereum Tech  --------------------------------------------------------------------*/}
      <div className="test">
        <div className="block ">
          <h1 className="testTitle wow jello">區塊鏈技術應用</h1>
        </div>
        <div>
          <img alt='this is a logo for immutability' src={immutability} className="logoSize" ></img>
          <img alt='this is a logo for tracability' src={traceable} className="logoSize"></img>
          <img alt='this is a logo for process Control' src={pControl} className="logoSize"></img>
          <img alt='this is a logo for customer Confidence' src={cConfidence} className="logoSize"></img>

        </div>
        <br /><br />
        <div className="block">
          <p className="testPara wow slideInUp">
            農產品運銷公司的員工可以登入帳號，與智能合約互動、傳送交易。透過區塊鏈不可竄改的特性，可確保交易資料的正確性，並在農產品發生問題時，能找到負責人與相關時間資訊。管理者同樣可以透過登入帳號來達到即時的供應鏈管理，利用區塊鏈監控每一批農產品的處理進度，做成本及存貨管理。
    </p>
        </div>

      </div>




      {/* The forth page --Explain Supply Chain Process --------------------------------------------------------------*/}
      <div className="processBg">
        <br /><br />
        <div className="block">
          <h1 className="testTitle wow jello" style={{ color: 'rgb(27, 19, 75)' }}>供應鏈流程</h1>
        </div>

        <div className="wholeProcess">
          <div className="row">
            <div className="processInline pr1 wow fadeInUp" data-wow-delay="1s">
              <img alt='this is process 1' src={pr1} className="processPic" ></img>
            </div>
            <div className="processInline pr2 wow fadeInUp" data-wow-delay="1.2s">
              <img alt='this is process 2' src={pr2} className="processPic"></img>
            </div>
            <div className="processInline pr3 wow fadeInUp" data-wow-delay="1.4s">
              <img alt='this is process 3' src={pr3} className="processPic"></img>
            </div>
            <div className="processInline pr4 wow fadeInUp" data-wow-delay="1.4s">
              <img alt='this is process 4' src={pr4} className="processPic"></img>
            </div>
            <div className="processInline pr5 wow fadeInUp" data-wow-delay="1.8s">
              <img alt='this is process 5' src={pr5} className="processPic"></img>
            </div>
            <div className="processInline pr6 wow fadeInUp" data-wow-delay="2s">
              <img alt='this is process 6' src={pr6} className="processPic"></img>
            </div>
          </div>

          <div className="cartDiv wow bounceInLeft">
            <img alt='this is a cart' src={cart} className="cartPic"></img>
          </div>

          <div className="timelineDiv wow fadeIn">
            <img alt='this is a timeline' src={timeline} className="timeline"></img>
          </div>
        </div>

        {/* the hover boxes */}
        <div className="box exp1">
          <div className="box-hover-text">
            <p className="box-body">貨品由農場送達農產運銷公司</p>
          </div>
        </div>
        <div className="box exp3">
          <div className="box-hover-text">
            <p className="box-body">貨品進入倉庫、上架</p>
          </div>
        </div>
        <div className="box exp5">
          <div className="box-hover-text">
            <p className="box-body">出庫，由物流運送貨品</p>
          </div>
        </div>
        <div className="box exp2">
          <div className="box-hover-text">
            <p className="box-body">公司人員清點數量、驗收商品</p>
          </div>
        </div>
        <div className="box exp4">
          <div className="box-hover-text">
            <p className="box-body">依訂單揀貨、裝箱</p>
          </div>
        </div>
        <div className="box exp6">
          <div className="box-hover-text">
            <p className="box-body">賣場接收貨品，驗收入庫上架</p>
          </div>
        </div>

        <div className="box exp7">
          <div className="box-hover-text">
            <p className="box-body">顧客至商店逛街購買商品</p>
          </div>
        </div>

      </div>



      {/* The fifth page -- About the farms-carousel ------------------------------------------------------------------*/}
      <div style={{ backgroundColor: 'rgb(27, 19, 75)' }} id="ourfarms">

        <div className="block" >
          <br /><br /><br /><br />
          <h4 className="testSubTitle">農場介紹</h4>
          <h1 className="testTitle wow jello"  >多個可信賴農場基地</h1>
        </div>
        <div>
          <img alt='this is logo stable' src={stable} className="logoSize" ></img>
          <img alt='this is logo quality' src={quality} className="logoSize"></img>
          <img alt='this is logo eco' src={eco} className="logoSize"></img>
          <img alt='this is logo multi' src={multi} className="logoSize"></img>
        </div>
        <br /><br />
      </div>


      <img alt='this is a curve' src={curve} className="curveSize" ></img>

      {/* carousel ---------------------------------------------------------------------------------*/}

      <Carousel id="Carousel" style={{ backgroundColor: 'rgb(27, 19, 75)' }}>
        <Carousel.Item >
          <div id="container-fluid" className="bg-image farmPic">
            <Carousel.Caption id="caption2" >
              <h2 className="introductionStyle ">政大農場</h2>
              <p className="intro" >政大農場位於八卦山半山腰處，具有許多戶外體驗活動。政大農場以最自然以及友善的手法，栽培有機蔬菜。更為了確保農產品的新鮮，只在出貨日前採收，將最直接的風味送至消費者手中。農場一年栽種約20~30種農作物，包含葉菜類以及根莖瓜果類。
       </p>
            </Carousel.Caption>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div id="container-fluid" className="bg-image tomatoPic"></div>
          <Carousel.Caption id="caption2">
            <h3 className="introductionStyle">茄粒略農場</h3>
            <p className="intro">坐落於嘉義六腳鄉的茄粒略農場，擁有充足的日照與暖和的溫度，適合番茄生長。農場搭配溫室的技術以及純熟的產銷管理，提供採購商穩定且品質良好的供貨。除了番茄，茄粒略也栽種芭樂、鳳梨、及豆類等多項作物。
         </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <div id="container-fluid" className="bg-image applePic"></div>
          <Carousel.Caption id="caption2">
            <h3 className="introductionStyle">蘋嵐農場</h3>
            <p className="intro">蘋嵐農場位於梨山地區，為採購商供應蘋果、水梨、水蜜桃等溫帶水果以及高山蔬菜。黑色有機腐植土壤，搭配溫和的基肥及減藥栽培，使得其果菜爽脆鮮甜。透過合作機制，將當季最新鮮的水果，送到消費者手中。
       </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>


      {/* The footer --------------------------------------------------------------------------------------*/}
      <div className="footerRow">
        <div className="footerBox">
          <br />
          <p className="pfooter footerStyle ">
            <a href="/" className="footerTag">Facebook &nbsp;</a>|
     				<a href="/" className="footerTag">&nbsp;Instagram&nbsp;</a>|
						<a href="/" className="footerTag">&nbsp;Twitter&nbsp;</a>|
						<a href="/" className="footerTag">&nbsp;Youtube&nbsp;</a>|
						<a href="/" className="footerTag">&nbsp;Email</a>
          </p>
        </div>
        <br /><br />
      </div>
    </body>
  )
}

export { Home };