import React, { useEffect, useState } from "react";
import { Button, Modal, Box, Typography } from "@mui/material";
import ModalComponent from './ModalComponent.tsx';
import "./CustomerTable.css";


// Interfaz para definir la estructura de un cliente
interface Customer {
  id: number;
  name: string;
  last_name: string;
  email: string;
  birth_date: string;
  personal_phone: string;
  contact_phone: string;
  zip_code: string;
}


const CustomerTable: React.FC = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Función para obtener los datos de los clientes
  const fetchCustomers = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/customers");
      if (!response.ok) {
        throw new Error("Error al obtener los datos");
      }
      const data = await response.json();
      setCustomers(data);
      setLoading(false);
    } catch (error) {
      setError("Hubo un problema al cargar los clientes.");
      setLoading(false);
    }
  };

  // useEffect para llamar a la API cuando el componente se monta
  useEffect(() => {
    fetchCustomers();
  }, []);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Customers</h1>

      {/* Botón para abrir el modal */}
<div style={{ width: "80%", margin: "0 auto 10px auto", textAlign: "right" }}>
  <Button variant="contained" color="primary" onClick={handleOpen}>
    Add
  </Button>
</div>

      {/* Llamada al componente modal */}
      <ModalComponent open={open} handleClose={handleClose} />

      <table className="customer-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Personal Phone</th>
            <th>Contact Phone</th>
            <th>Birth Date</th>
            <th>Zip Code</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td>{customer.id}</td>
              <td>{customer.name}</td>
              <td>{customer.last_name}</td>
              <td>{customer.email}</td>
              <td>{customer.personal_phone}</td>
              <td>{customer.contact_phone}</td>
              <td>{customer.birth_date}</td>
              <td>{customer.zip_code}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerTable;