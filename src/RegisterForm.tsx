import React, { useState } from "react";
import "./RegisterForm.css";

interface User {
  name: string;
  lastName: string;
  email: string;
  personal_phone: string;
  contact_phone: string;
  dateOfBirth: string;
  password: string;
  zip_code: string;
}
interface RegisterFormProps {
  onSaved: () => void;
}

const RegisterForm = (props: RegisterFormProps) => {
  const {onSaved} = props;
  const [formData, setFormData] = useState<User>({
    name: "",
    lastName: "",
    email: "",
    personal_phone: "",
    contact_phone: "",
    dateOfBirth: "",
    password: "",
    zip_code: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validaciones
    const nameParts = formData.name.trim().split(" ");
    if (nameParts.length > 3) {
      alert("Por favor, ingresa un máximo de 3 nombres.");
      return;
    }

    const hasNumbers = /\d/;
    if (hasNumbers.test(formData.name)) {
      alert("El nombre no debe contener números.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      alert("Por favor, ingresa un correo electrónico válido.");
      return;
    }

    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(formData.personal_phone)) {
      alert("El número de teléfono debe tener exactamente 10 dígitos.");
      return;
    }

    if (formData.password.length < 10) {
      alert("La contraseña debe tener al menos 10 caracteres.");
      return;
    }

    if (formData.zip_code.length !== 6) {
      alert("El código zip debe tener exactamente 6 caracteres.");
      return;
    }

    // Formatear los datos para enviar a la API
    const requestData = {
      name: formData.name,
      last_name: formData.lastName,
      email: formData.email,
      birth_date: formData.dateOfBirth,
      personal_phone: formData.personal_phone,
      contact_phone: formData.contact_phone,
      password: formData.password,
      zip_code: formData.zip_code,
    };

    try {
      // Hacer la solicitud POST a la API
      const response = await fetch("http://localhost:8000/api/customers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      if (!response.ok) {
        throw new Error("Error al guardar los datos");
      }

      const result = await response.json();
      onSaved()
      alert("Registro exitoso");
      
    } catch (error) {
      console.error("Error al realizar la solicitud:", error);
      alert("Hubo un error al registrar los datos.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div className="form-group">
        <label htmlFor="name" className="form-label">
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="form-input"
        />
      </div>

      <div className="form-group">
        <label htmlFor="lastName" className="form-label">
          Last Name:
        </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
          className="form-input"
        />
      </div>

      <div className="form-group">
        <label htmlFor="email" className="form-label">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="form-input"
        />
      </div>

      <div className="form-group">
        <label htmlFor="personal_phone" className="form-label">
          Personal Phone:
        </label>
        <input
          type="tel"
          id="personal_phone"
          name="personal_phone"
          value={formData.personal_phone}
          onChange={handleChange}
          required
          className="form-input"
        />
      </div>

      <div className="form-group">
        <label htmlFor="contact_phone" className="form-label">
          Contact Phone:
        </label>
        <input
          type="tel"
          id="contact_phone"
          name="contact_phone"
          value={formData.contact_phone}
          onChange={handleChange}
          required
          className="form-input"
        />
      </div>

      <div className="form-group">
        <label htmlFor="dateOfBirth" className="form-label">
          Birth Date:
        </label>
        <input
          type="date"
          id="dateOfBirth"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={handleChange}
          required
          className="form-input"
        />
      </div>

      <div className="form-group">
        <label htmlFor="password" className="form-label">
          Password:
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          className="form-input"
        />
      </div>

      <div className="form-group">
        <label htmlFor="zip_code" className="form-label">
          Zip Code:
        </label>
        <input
          type="text"
          id="zip_code"
          name="zip_code"
          value={formData.zip_code}
          onChange={handleChange}
          required
          className="form-input"
        />
      </div>

      <button type="submit" className="form-button">
        Save
      </button>
    </form>
  );
};

export default RegisterForm;
