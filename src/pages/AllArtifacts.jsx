import React from "react";
import Card from "../components/Card";

const AllArtifacts = () => {
  return (
    <div className="bg-[#1F1D1D]">
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 gap-5">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default AllArtifacts;
