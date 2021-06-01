import React from 'react';
import Notification from '../../assets/images/notification.svg';
import Profile from '../../assets/images/profile.svg';
import Calender from '../../assets/images/Calendar.svg';
import Search from '../../assets/images/Search.svg';
import './balances.css';
import Layout from '../../components/layout/layout';

const Balances = () => {
    return (
        <>
        <Layout />
        <div className="balances"> 
               <div>
                    <div className="top-level">
                        <div className="top-left">
                            <h3>Balances</h3>
                            <p>Today, 19th October 2020</p>
                        </div>
                        <div className="top-right">
                            <img src={Notification} alt="the notification icon" className="top-icon"/>
                            <img src={Profile} alt="the profile icon" className="top-icon"/>
                        </div>
                    </div>
                    <section className="cards">
                        <div className="card">
                           <div className="card-top">
                               <p>Total account balance</p>
                               <p>USD</p>
                            </div>
                            <hr />
                            <div className="card-bottom">
                                <div className="card-bottom-left">
                                    <p className="amount">$5332.18</p>
                                    <p>1 USD = 381.97NGN</p>
                                </div>
                                <div className="card-bottom-right">
                                    <p>KES</p>
                                    <p>NGN</p>
                                    <p>GHC</p>
                                </div>
                            </div>
                        </div>
                        <div className="card-1">
                            <p>Funds on hold</p>
                            <hr />
                            <div className="card-1-bottom">
                                <p className="amount">$5332.18</p>
                            </div>
                        </div>
                    </section>
                    <section className="info-section">
                        <p className="info-p">Payout Table</p>
                        <div className="info-right">
                            <div className="input">
                                <input type="text" placeholder="Search Something" />
                                <img src={Search} alt="the profile icon" className="input-icon"/>
                            </div>
                            <div className ="date">
                                <p className="box">March 2020</p>
                                <img src={Calender} alt="the profile icon" className="box-icon"/>
                            </div>
                            <button className="payout">Payout</button>
                        </div>
                    </section>
                    <div className="table">
                    <table className="payout-table">
                        <thead>
                            <tr className="table-row">
                                <th>Payout ID</th>
                                <th>Source</th>
                                <th>Date</th>
                                <th>Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>KLA12578DHQ</td>
                                <td>Vel pellentesque Omare</td>
                                <td>25th November,2020</td>
                                <td>$1,200</td>
                            </tr>
                            <tr>
                                <td>KLA12578DHQ</td>
                                <td>Vel pellentesque Omare</td>
                                <td>25th November,2020</td>
                                <td>$1,200</td>
                            </tr>
                            <tr>
                                <td>KLA12578DHQ</td>
                                <td>Vel pellentesque Omare</td>
                                <td>25th November,2020</td>
                                <td>$1,200</td>
                            </tr>
                            <tr>
                                <td>KLA12578DHQ</td>
                                <td>Vel pellentesque Omare</td>
                                <td>25th November,2020</td>
                                <td>$1,200</td>
                            </tr>
                    </tbody>
                    </table>
                    </div>
                    <button className="see-more"> See More</button>
               </div>
        </div>
        </>
    )
}

export default Balances;
