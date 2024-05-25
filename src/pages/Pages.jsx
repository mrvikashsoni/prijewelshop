import React from "react";
import Home from "./home/Home";
import Earring from "./earring/Earring";
import Necklace from "./necklace/Necklace";
import Tikka from "./tikka/Tikka";
import Bracelet from "./bracelet/Bracelet";
import NosePin from "./nosePin/NosePin";
import SareePin from "./sareePin/SareePin";
import Combo from "./combo/Combo";

import { Route, Routes } from "react-router-dom";

export default function Pages() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/earring" element={<Earring />} />
        <Route exact path="/necklace" element={<Necklace />} />
        <Route exact path="/tikka" element={<Tikka />} />
        <Route exact path="/bracelet" element={<Bracelet />} />
        <Route exact path="/nosePin" element={<NosePin />} />
        <Route exact path="/sareePin" element={<SareePin />} />
        <Route exact path="/combo" element={<Combo />} />
      </Routes>
    </>
  );
}
