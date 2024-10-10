// Modal.tsx
import React from "react";
import { Modal, Box, Typography, IconButton } from "@mui/material";
import RegisterForm from "./RegisterForm.tsx";

interface ModalProps {
  open: boolean;
  handleClose: () => void;
  
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "30%", // Ajustamos el ancho a 80% para darle más espacio al formulario
  maxHeight: "90vh", // Altura máxima del modal al 90% de la pantalla
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  overflowY: "auto", // Habilitamos el scroll si el contenido es demasiado largo
};

const ModalComponent: React.FC<ModalProps> = ({ open, handleClose }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Typography
          variant="h6"
          component="h1"
          style={{
            textAlign: "center",
            marginBottom: "20px",
            fontWeight: "bold",
          }}
        >
          Add Customer
        </Typography>

        <RegisterForm onSaved={handleClose} />
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <button 
            onClick={handleClose} 
            style={{ 
              backgroundColor: '#e0e0e0', 
              border: 'none',            
              padding: '10px 20px',    
              fontSize: '16px',         
              cursor: 'pointer',         
              borderRadius: '4px',      
            }}
          >
            Close
          </button>
        </div>
      </Box>
    </Modal>
  );
};

export default ModalComponent;
