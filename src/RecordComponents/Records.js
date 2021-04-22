import React, { useState, useEffect } from 'react';
import './record.css';
import "../HomeComponents/animate.css";


function Records({ match }) {

    const [infos, setInfo] = useState();

    useEffect(() => {
        fetch(`https://140.119.136.108:4000/batchInfo/${match.params.address}`)
            .then(response => response.json())
            .then((data) => {
                // console.log(data);
                setInfo(data);
            });
    }, [match.params.address]);

    return <div>
        {infos && infos.map(info => (
            <div class="timeback">
                <section class="section intro">
                    <div class="container">
                        <div class='dc'>
                            <div class="df ">
                                <h1 className='resume'>產品履歷</h1>
                                <h2 className="fruitName">{info.goodsInfo}</h2>
                                <hr />
                                <h2>產品編號:&nbsp;{match.params.address}</h2>
                                <h2>合約地址:&nbsp;0x70415Ed5bc4603293F15195A1030249B47f4EC15</h2>
                                <br />
                            </div>
                        </div>
                    </div>
                </section>
                <section class="timeline2">
                    <br /><br /><br /><br /><br />
                    <ol>
                        <li className='animated jello'>
                            <div >
                                <h3>農場出貨</h3><hr />
                                <h6><b>出貨時間:</b>&nbsp;&nbsp;<font className='ff'>{info.deliveryDateTime}</font></h6>
                                <h6><b>農場名稱:</b>&nbsp;&nbsp;<font className='ff'>{info.farmName}</font></h6>
                                <h6><b>農場地址:</b>&nbsp;&nbsp;<font className='ff'>{info.farmLocation}</font></h6>
                                <h6><b>農夫姓名:</b>&nbsp;&nbsp;<font className='ff'>{info.farmerName}</font></h6>
                            </div>
                        </li>
                        <li>
                            <div class="d">
                                <h3>檢驗</h3><hr />
                                <h6><b>檢驗時間:</b>&nbsp;&nbsp;<font className='ff'>{info.inspectionDateTime}</font></h6>
                                <h6><b>驗貨員:</b>&nbsp;&nbsp;<font className='ff'>{info.fullName}</font></h6>
                                <h6>&nbsp;&nbsp;&nbsp;</h6>
                                <h6>&nbsp;</h6></div>

                        </li>
                        <li>
                            <div>
                                <h3>入庫</h3><hr />
                                <h6><b>入庫時間:</b>&nbsp;&nbsp;<font className='ff'>{info.stackDateTime}</font></h6>
                                <h6><b>貨架編號:</b>&nbsp;&nbsp;<font className='ff'>{info.shelfNo}</font></h6>
                                <h6>&nbsp;&nbsp;&nbsp;</h6>
                                <h6>&nbsp;</h6>
                            </div>
                        </li>
                        <li>
                            <div class="d">
                                <h3>出貨</h3><hr />
                                <h6><b>出貨時間:</b>&nbsp;&nbsp;<font className='ff'>{info.shippingDateTime}</font></h6>
                                <h6><b>出貨車號:</b>&nbsp;&nbsp;<font className='ff'>{info.truckNo}</font></h6>
                                <h6><b>物流員:</b>&nbsp;&nbsp;<font className='ff'>{info.driver}</font></h6>
                                <h6><b>目的地:</b>&nbsp;&nbsp;<font className='ff'>{info.destination}</font></h6>
                            </div>
                        </li>
                        <li>
                            <div>
                                <h3>抵達賣場</h3><hr />
                                <h6><b>抵達時間:</b>&nbsp;&nbsp;<font className='ff'>{info.consignmentDateTime}</font></h6>
                                <h6><b>賣場代號:</b>&nbsp;&nbsp;<font className='ff'>{info.symbol}</font></h6>
                                <h6><b>賣場名稱:</b>&nbsp;&nbsp;<font className='ff'>{info.destination}</font></h6>
                                <h6>&nbsp;</h6>  </div>
                        </li>
                        <li className="two"></li>
                    </ol>
                </section>
            </div>
        ))}
    </div>
}

export { Records };