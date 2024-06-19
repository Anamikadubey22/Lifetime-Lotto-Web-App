import React, { useState, useEffect, useMemo } from "react";
// import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { getLotteryTickets } from "../../utils/index";
import Slider from "../components/Slider";
import LotteryCard from "../components/LotteryCard";
import Pagination from "../components/Pagination";

export default function LotteryPage({props}) {
    const [lotteryTickets, setLotteryTickets] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentWidth, setCurrentWidth] = useState(window.innerWidth);
    const [pageSize, setPageSize] = useState("1");

    useEffect(() => {
        window.addEventListener("resize", () => setCurrentWidth(window.innerWidth));
    });

    useEffect(() => {
        const fetchLotteryTickets = async () => {
            const response = await getLotteryTickets({});
            if (response.length) {
                setLotteryTickets(response);
            }
        };
        fetchLotteryTickets();
    }, []);

    useEffect(() => {
        if (currentWidth > 576) {
            setPageSize(4);
        } else setPageSize(2);
    }, [currentWidth]);
    
    const currentPageData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * pageSize;
        const lastPageIndex = firstPageIndex + pageSize;
        return lotteryTickets.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, pageSize, lotteryTickets]);
  return (
    <>
        <Navbar props={{mainPage: "lotteries", subPage: ""}} />

        <section className="sec-slider pb-4">
            <div className="container">
                <div className="col-lg-12">
                    <Slider />
                </div>
            </div>
        </section>

        <section className="sec-second pb-4">
            <div className="container">
                <h2 className="mt-4 mb-4 sec-heading">Lotteries</h2>
                <div className="row">
                    {lotteryTickets.length ? (
                        currentPageData.map((ticket, index) => {
                            return index % 2 === 1 ?
                                <div key={index} className="col-lg-6 col-md-10 mb-4" data-aos="fade-left" data-aos-easing="ease" data-aos-delay="100" transition-delay="1s" opacity="1" transform="translateZ(0)">
                                    <LotteryCard props={ticket} />
                                </div>
                                :
                                <div key={index} className="col-lg-6 col-md-10 mb-4" data-aos="fade-right" data-aos-easing="ease" data-aos-delay="200" transition-delay="1s" opacity="1" transform="translateZ(0)">
                                    <LotteryCard props={ticket} />
                                </div>
                        })
                    ) : (
                        <p>No Lotteries Available...</p>
                    )}
                </div>
                <div className="container">
                    <Pagination
                        className=""
                        currentPage={currentPage}
                        totalCount={lotteryTickets.length}
                        pageSize={pageSize}
                        onPageChange={(page) => setCurrentPage(page)}
                    />
                </div>
            </div>
        </section>

        <Footer props={""} />
    </>
  );
}