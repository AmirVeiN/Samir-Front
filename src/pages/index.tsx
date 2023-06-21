"use client";
import MainPage from "@/components/main";
import NavBar from "@/components/navBar";
import Footer from "@/components/footer";
import React, { useState, useEffect } from "react";

export default function Main() {
  return (
    <div className="font-iranSans ">
      <NavBar />
      <MainPage />
      <Footer />
    </div>
  );
}
