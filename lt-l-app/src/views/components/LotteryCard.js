import React from "react";
import { Link } from "react-router-dom";

export default function LotteryCard({props}) {
    return <div className="card" style={props.image ? {backgroundImage: "url('"+props.image+"')"} : {backgroundImage: "url('assets/images/Mask-group.png')"}}>
        <div className="card-body p-0">
            <div className="row">
                <div className="col-lg-3 col-sm col-3"></div>
                <div className="col-lg-9 col-sm col-9 pylg-4 py-lg-3 py-2 px-lg-5 px-3" style={{backgroundColor: "#ffffff"}}>
                    <div className="row">
                        <div className="col-lg-12 col-sm col-12">
                            <h4>{props.gameName}</h4>
                        </div>
                    </div>
                    <div className="row mt-lg-3 mt-1">
                        <div
                            className="col-lg-9 col-sm col-8 d-flex justify-content-left align-items-center">
                            <img className="img-fluid" src={"assets/images/Vector-5.png"} alt="" />
                            <h2 className="p-rs">{props.ticketPrice}</h2>
                        </div>
                        <div className="col-lg-3 col-sm col-4 time-row">
                            <p className="p-one-t">Duration</p>
                            <p className="p-two-t">{props.gameDuration}</p>
                        </div>
                    </div>
                    <div className="row mt-lg-3 mt-1">
                        <div className="col-lg-4 col-sm col-4">
                            <div className="time-row">
                                <p className="p-one-t text-start">Start Time</p>
                                <p className="p-two-t text-start">{props.startTime}</p>
                            </div>
                        </div>
                        <div className="col-lg-8 col-sm col-8">
                            <div className="row">
                                <div className="col-lg-3 col-sm col-4">
                                    <div className="time-row">
                                        <p className="p-one-t text-start">Sold :</p>
                                        <p className="p-two-t text-start">0%</p>
                                    </div>
                                </div>
                                <div className="col-lg-9 col-sm col-8">
                                    <div className="progress mt-4">
                                        <div className="progress-bar bg-warning" role="progressbar"
                                            style={{width: "0%"}} aria-valuenow="0" aria-valuemin="0"
                                            aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Link to={"/lotteries/"+props.gameName.toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, '')+"-"+props.id} className="btn btn-outline-primary w-100 py-sm-1 mt-lg-3 mt-1">Buy Ticket</Link>
                </div>
            </div>
        </div>
    </div>
}