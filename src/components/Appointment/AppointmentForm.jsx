import React, { useState } from 'react';
import { Form, Input, Button, DatePicker, Select } from 'antd';

const { Option } = Select;

const AppointmentForm = () => {
  const [patientName, setPatientName] = useState('');
  const [patientEmail, setPatientEmail] = useState('');
  const [patientPhone, setPatientPhone] = useState('');
  const [doctorSpecialty, setDoctorSpecialty] = useState('');
  const [appointmentDate, setAppointmentDate] = useState(null);

  const handleSubmit = () => {
    console.log('Nombre del paciente:', patientName);
    console.log('Email del paciente:', patientEmail);
    console.log('Teléfono del paciente:', patientPhone);
    console.log('Especialidad del doctor:', doctorSpecialty);
    console.log('Fecha de la cita:', appointmentDate ? appointmentDate.format('YYYY-MM-DD') : '');
  };

  return (
    <Form
      layout="vertical"
      onFinish={handleSubmit}
      style={{ maxWidth: 400, margin: '40px auto' }}
    >
      <Form.Item
        label="Nombre del paciente"
        rules={[{ required: true, message: 'Por favor ingrese el nombre del paciente' }]}
      >
        <Input value={patientName} onChange={(e) => setPatientName(e.target.value)} />
      </Form.Item>
      <Form.Item
        label="Email del paciente"
        rules={[{ required: true, message: 'Por favor ingrese el email del paciente' }]}
      >
        <Input value={patientEmail} onChange={(e) => setPatientEmail(e.target.value)} />
      </Form.Item>
      <Form.Item
        label="Teléfono del paciente"
        rules={[{ required: true, message: 'Por favor ingrese el teléfono del paciente' }]}
      >
        <Input value={patientPhone} onChange={(e) => setPatientPhone(e.target.value)} />
      </Form.Item>

      <Form.Item
        label="Especialidad del doctor"
        rules={[{ required: true, message: 'Por favor seleccione la especialidad del doctor' }]}
      >
        <Select value={doctorSpecialty} onChange={(value) => setDoctorSpecialty(value)}>
          <Option value="Ginecología y Obstetricia">Ginecología y Obstetricia</Option>
          <Option value="Endocrinología Reproductiva">Endocrinología Reproductiva</Option>
          <Option value="Medicina Materno-Fetal">Medicina Materno-Fetal</Option>
          <Option value="Ginecología Oncológica">Ginecología Oncológica</Option>
          <Option value="Uroginecología">Uroginecología</Option>
          <Option value="Ginecología Pediátrica y Adolescente">Ginecología Pediátrica y Adolescente</Option>
          <Option value="Reproducción Asistida">Reproducción Asistida</Option>
          <Option value="Ginecología General">Ginecología General</Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="Fecha de la cita"
        rules={[{ required: true, message: 'Por favor seleccione la fecha de la cita' }]}
      >
        <DatePicker value={appointmentDate} placeholder={'Selecciona'} onChange={(date) => setAppointmentDate(date)} />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Agendar Cita
        </Button>
      </Form.Item>
    </Form>
  );
};

export { AppointmentForm };