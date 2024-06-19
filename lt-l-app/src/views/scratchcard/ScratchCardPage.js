import React, { useState, useEffect, useMemo } from "react";
// import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { getScratchCards } from "../../utils/index";
import Slider from "../components/Slider";
import ScratchCard from "../components/ScratchCard";
import Pagination from "../components/Pagination";

export default function ScratchCardPage({props}) {
    const [scratchCards, setScratchCards] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentWidth, setCurrentWidth] = useState(window.innerWidth);
    const [pageSize, setPageSize] = useState("1");

    useEffect(() => {
        window.addEventListener("resize", () => setCurrentWidth(window.innerWidth));
    });

    useEffect(() => {
        const fetchScratchCards = async () => {
            const response = await getScratchCards({});
            if (response.length) {
                setScratchCards(response);
            }
        };
        fetchScratchCards();
    }, []);

    useEffect(() => {
        if (currentWidth > 576) {
            setPageSize(6);
        } else setPageSize(2);
    }, [currentWidth]);
    
    const currentPageData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * pageSize;
        const lastPageIndex = firstPageIndex + pageSize;
        return scratchCards.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, pageSize, scratchCards]);
  return (
    <>
        <Navbar props={{mainPage: "scratchcard", subPage: ""}} />

        <section className="sec-slider pb-4">
            <div className="container">
                <div className="col-lg-12">
                    <Slider />
                </div>
            </div>
        </section>

        <section className="sec-scratch-cards pb-4">
            <div className="container">
                <h2 className="mt-5 mb-4 sec-heading">Scratch Cards</h2>
                <div className="row">
                    {scratchCards.length ? (
                        currentPageData.map((scratchCard, index) => {
                            return index % 2===1?
                            <div key={index} className="col-lg-4 col-md-6 mb-4" data-aos-delay="100" data-aos="fade-up" data-aos-easing="ease" transition-delay="1s" opacity="1" transform="translateZ(0)">
                                <ScratchCard props={scratchCard} />
                            </div>
                            :
                            <div key={index} className="col-lg-4 col-md-6 mb-4" data-aos-delay="200" data-aos="fade-up" data-aos-easing="ease" transition-delay="1s" opacity="1" transform="translateZ(0)">
                                <ScratchCard props={scratchCard} />
                           </div>
                        })
                    ) : (
                        <p>No Scratch Card Available...</p>
                    )}
                </div>
                <div className="container">
                    <Pagination
                        className=""
                        currentPage={currentPage}
                        totalCount={scratchCards.length}
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