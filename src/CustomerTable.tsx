import React, { useEffect, useState } from "react";
import { Button, Modal, Box, Typography } from "@mui/material";
import ModalComponent from './ModalComponent.tsx';
import "./CustomerTable.css";


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
  const [openModal, setOpenModal] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Cargar la lista de clientes desde la API
  const fetchCustomers = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:8000/api/customers");
      const data = await response.json();
      setCustomers(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching customers:", error);
      setError("Hubo un problema al cargar los clientes.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  // Abrir el modal para agregar un nuevo cliente
  const handleAddCustomer = () => {
    setSelectedCustomer(null); 
    setOpenModal(true);
  };

 
  const handleEditCustomer = (customer: Customer) => {
    setSelectedCustomer(customer); 
    setOpenModal(true);
  };

  
  // const handleSaveCustomer = (savedCustomer: Customer) => {
  //   setOpenModal(false);

  //   if (selectedCustomer) {
      
  //     setCustomers((prevCustomers) =>
  //       prevCustomers.map((cust) =>
  //         cust.id === savedCustomer.id ? savedCustomer : cust
  //       )
  //     );
  //   } else {
     
  //     setCustomers((prevCustomers) => [...prevCustomers, savedCustomer]);
  //   }
  // };




  // Función para eliminar un cliente
  
  
 // Función que se ejecuta cuando se guardan los datos desde el formulario
 const handleSaveCustomer = async (savedCustomer: Customer) => {
  setOpenModal(false);

  // Si es una edición, envía los datos al servidor para actualizar
  if (selectedCustomer) {
    try {
      await fetch(`http://localhost:8000/api/customers/${savedCustomer.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(savedCustomer),
      });
      fetchCustomers(); // Recargar la lista de clientes desde el servidor
    } catch (error) {
      console.error("Error updating customer:", error);
    }
  } else {
    // Si es un nuevo cliente, envía los datos al servidor para crear uno nuevo
    try {
      await fetch("http://localhost:8000/api/customers", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(savedCustomer),
      });
      fetchCustomers(); // Recargar la lista de clientes desde el servidor
    } catch (error) {
      console.error("Error adding customer:", error);
    }
  }
};


  
  const handleDelete = async (id: number) => {
    try {
      const response = await fetch(`http://localhost:8000/api/customers/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        setCustomers(customers.filter(customer => customer.id !== id));
      } else {
        throw new Error('Error al eliminar el cliente');
      }
    } catch (error) {
      setError("Hubo un problema al eliminar el cliente.");
    }
  };

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Customers</h1>

      
      <div style={{ width: "80%", margin: "0 auto 10px auto", textAlign: "right" }}>
        <Button variant="contained" color="primary" onClick={handleAddCustomer}>
          Add Customer
        </Button>
      </div>

     
      <ModalComponent
        open={openModal}
        handleClose={() => setOpenModal(false)}
        customer={selectedCustomer}
        handleSave={handleSaveCustomer}
      />

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
            <th>Actions</th>
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
              <td>
              <div className="action-buttons">
                <Button
                  variant="contained"
                  color="secondary"
                 
                  onClick={() => handleEditCustomer(customer)}
                 
                >
                  Edit
                </Button>
                <Button
                  variant="contained"
                  color="error"
                  
                  onClick={() => handleDelete(customer.id)}
                >
                  Delete
                </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerTable;


// import React, { useEffect, useState } from "react";   

// import { Button, Modal, Box, Typography } from "@mui/material";
// import ModalComponent from './ModalComponent.tsx';
// import "./CustomerTable.css";


// // Interfaz para definir la estructura de un cliente
// interface Customer {
//   id: number;
//   name: string;
//   last_name: string;
//   email: string;
//   birth_date: string;
//   personal_phone: string;
//   contact_phone: string;
//   zip_code: string;
// }


// const CustomerTable = () => {
//   const [customers, setCustomers] = useState<Customer[]>([]);
//   const [openModal, setOpenModal] = useState(false);
//   const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null); // Para editar un cliente

//   // const handleOpen = () => setOpen(true);
//   // const handleClose = () => setOpen(false);

//   // const handleEditOpen = (customer: Customer) => {
//   //   setSelectedCustomer(customer);
//   //   setEditOpen(true);
//   // };
//   // const handleEditClose = () => setEditOpen(false);

//   // // Función para obtener los datos de los clientes
//   // const fetchCustomers = async () => {
//   //   try {
//   //     const response = await fetch("http://localhost:8000/api/customers");
//   //     if (!response.ok) {
//   //       throw new Error("Error al obtener los datos");
//   //     }
//   //     const data = await response.json();
//   //     setCustomers(data);
//   //     setLoading(false);
//   //   } catch (error) {
//   //     setError("Hubo un problema al cargar los clientes.");
//   //     setLoading(false);
//   //   }
//   // };  

//    // Cargar la lista de clientes desde la API
//    const fetchCustomers = async () => {
//     try {
//       const response = await fetch("http://localhost:8000/api/customers");
//       const data = await response.json();
//       setCustomers(data);
//     } catch (error) {
//       console.error("Error fetching customers:", error);
//     }
//   };

//   useEffect(() => {
//     fetchCustomers();
//   }, []);

//  // Abrir el modal para agregar un nuevo cliente
//  const handleAddCustomer = () => {
//   setSelectedCustomer(null); // No se selecciona cliente para agregar uno nuevo
//   setOpenModal(true);
// };

// // Abrir el modal para editar un cliente existente
// const handleEditCustomer = (customer: Customer) => {
//   setSelectedCustomer(customer); // Cargar el cliente seleccionado para editar
//   setOpenModal(true);
// };

// // Función que se ejecuta cuando se guardan los datos desde el formulario
// const handleSaveCustomer = (savedCustomer: Customer) => {
//   setOpenModal(false);
  
//   // Si es una edición, actualizar la tabla
//   if (selectedCustomer) {
//     setCustomers((prevCustomers) =>
//       prevCustomers.map((cust) =>
//         cust.id === savedCustomer.id ? savedCustomer : cust
//       )
//     );
//   } else {
//     // Si es un nuevo cliente, agregarlo a la tabla
//     setCustomers((prevCustomers) => [...prevCustomers, savedCustomer]);
//   }
// };

//   // Función para eliminar un cliente
//   const handleDelete = async (id: number) => {
//     try {
//       const response = await fetch(`http://localhost:8000/api/customers/${id}`, {
//         method: 'DELETE',
//       });
//       if (response.ok) {
//         setCustomers(customers.filter(customer => customer.id !== id));
//       } else {
//         throw new Error('Error al eliminar el cliente');
//       }
//     } catch (error) {
//       setError("Hubo un problema al eliminar el cliente.");
//     }
//   };

 

//   // useEffect para llamar a la API cuando el componente se monta
//   useEffect(() => {
//     fetchCustomers();
//   }, []);

//   if (loading) {
//     return <div>Cargando...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }


//   return (
//     <div>
//       <h1>Customers</h1>

//       {/* Botón para abrir el modal */}
// <div style={{ width: "80%", margin: "0 auto 10px auto", textAlign: "right" }}>
//   <Button variant="contained" color="primary" onClick={handleOpen}>
//     Add
//   </Button>
// </div>

      
//       <ModalComponent open={open} handleClose={handleClose} handleSave={function (customer: any): void {
//         throw new Error("Function not implemented.");
//       } } />

//        {/* Modal para editar
//        <ModalEdit open={editOpen} handleClose={handleEditClose} customer={selectedCustomer} handleSave={handleSave} /> */}

//       <table className="customer-table">
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Last Name</th>
//             <th>Email</th>
//             <th>Personal Phone</th>
//             <th>Contact Phone</th>
//             <th>Birth Date</th>
//             <th>Zip Code</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {customers.map((customer) => (
//             <tr key={customer.id}>
//               <td>{customer.id}</td>
//               <td>{customer.name}</td>
//               <td>{customer.last_name}</td>
//               <td>{customer.email}</td>
//               <td>{customer.personal_phone}</td>
//               <td>{customer.contact_phone}</td>
//               <td>{customer.birth_date}</td>
//               <td>{customer.zip_code}</td>
//               <td>
//               <Button
//                   variant="contained"
//                   color="secondary"
//                   onClick={() => handleEditOpen(customer)}
//                   style={{ marginRight: '5px' }}
//                 >
//                   Edit
//                 </Button>
//                 <Button
//                   variant="contained"
//                   color="error"
//                   onClick={() => handleDelete(customer.id)}
//                 >
//                   Delete
//                 </Button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default CustomerTable;