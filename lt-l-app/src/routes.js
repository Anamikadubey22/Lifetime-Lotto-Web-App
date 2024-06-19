import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./views/home/HomePage";
import LotteryPage from "./views/lottery/LotteryPage";
import LotteryDetailPage from "./views/lottery/LotteryDetailPage";
import ScratchCardPage from "./views/scratchcard/ScratchCardPage";
import FaqPage from "./views/faq/FaqPage";
import AboutPage from "./views/about/AboutPage";
import SupportPage from "./views/support/SupportPage";
import HelpPage from "./views/help/HelpPage";
import ContactPage from "./views/contact/ContactPage";
import LoginPage from "./views/login/LoginPage";
import ForgotPasswordPage from "./views/login/ForgotPassword";
import RegistrationPage from "./views/registration/RegistrationPage";
import PrivacyPolicyPage from "./views/privacypolicy/PrivacyPolicyPage";
import TermsAndConditionsPage from "./views/termsandconditions/TermsAndConditionsPage";
import DashboardPage from "./views/dashboard/DashboardPage";
import DepositesPage from "./views/dashboard/DepositesPage";
import TransactionsPage from "./views/dashboard/TransactionsPage";
import TicketListPage from "./views/dashboard/TicketListPage";
import WinnerPage from "./views/winners/WinnerPage";
import { config } from "./config";
import { useAuth } from "../src/utils/auth";
const path = {
    baseUrl: config.mainUrl, 
    assetsUrl: config.assetsUrl,
    apiUrl: config.apiUrl
};

export default function RoutePath() {
    const { user } = useAuth();
    return (
        <Routes>
            <Route exact path="/" element={
                <HomePage props={ path } />
            } />
            <Route exact path="/lotteries" element={
                <LotteryPage props={ path } />
            } />
            <Route exact path="/lotteries/:id" element={
                <LotteryDetailPage props={ path } />
            } />
            <Route exact path="/scratch-cards" element={
                <ScratchCardPage props={ path } />
            } />
            <Route exact path="/faqs" element={
                <FaqPage props={ path } />
            } />
            <Route exact path="/about-us" element={
                <AboutPage props={ path } />
            } />
            <Route exact path="/support" element={
                <SupportPage props={ path } />
            } />
            <Route exact path="/help" element={
                <HelpPage props={ path } />
            } />
            <Route exact path="/contact-us" element={
                <ContactPage props={ path } />
            } />
            <Route exact path="/login" element={
                <LoginPage props={ path } />
            } />
            <Route exact path="/forgot-password" element={
                <ForgotPasswordPage props={ path } />
            } />
            <Route exact path="/registration" element={
                <RegistrationPage props={ path } />
            } />
            <Route exact path="/privacy-policy" element={
                <PrivacyPolicyPage props={ path } />
            } />
            <Route exact path="/terms-and-conditions" element={
                <TermsAndConditionsPage props={ path } />
            } />
            {user?.isLoggedIn ? <>
                <Route exact path="/dashboard" element={
                    <DashboardPage props={ path } />
                } />
                <Route exact path="/deposit" element={
                    <DepositesPage props={ path } />
                } />
                <Route exact path="/transactions" element={
                    <TransactionsPage props={ path } />
                } />
                <Route exact path="/ticketlist" element={
                    <TicketListPage props={ path } />
                } />
            </> : ""}
            <Route exact path="/winners" element={
                <WinnerPage props={ path } />
            } />
        </Routes>
    )
}