import React from "react";
import { services } from "../constants/index";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
  return (
    <section className="max-container flex gap-9 justify-center flex-wrap">
      {services.map((item) => (
        <ServiceCard key={item.label} {...item}></ServiceCard>
      ))}
    </section>
  );
};

export default Services;
