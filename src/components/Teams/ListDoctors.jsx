import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DoctorCard } from "./DoctorCard";
import { Row, Col, Button, Space } from "antd";

const ListDoctors = () => {
  const [doctors, setDoctors] = useState([]);

  const fetchDoctors = async () => {
    try {
      const response = await fetch('../../../../data/doctors.json');
      const data = await response.json();
      setDoctors(data);
    } catch (error) {
      console.error("Error fetching doctors:", error);
    }
  };

  useEffect(() => {
    fetchDoctors();
  }, []);

  return (
    <div className="section_list_doctors">
      <Row gutter={[16, 16]}>
        {doctors.map((doctor, index) => (
          <Col key={index} xs={24} sm={12} md={8}>
            <DoctorCard
              name={doctor.name}
              specialty={doctor.specialty}
              description={doctor.description}
              image={doctor.image}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export { ListDoctors };