// Modal.tsx
import React from "react";
import { Modal, Box, Typography, IconButton } from "@mui/material";
import RegisterForm from "./RegisterForm.tsx";

interface ModalProps {
  open: boolean;
  handleClose: () => void;
  customer?: {  // Cliente opcional para edición
    id: number;
    name: string;
    last_name: string;
    email: string;
    birth_date: string;
    personal_phone: string;
    contact_phone: string;
    zip_code: string;
  } | null; 
  handleSave: (customer: any) => void; 
}
  


const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "30%", 
  maxHeight: "90vh", 
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  overflowY: "auto", 
};

const ModalComponent: React.FC<ModalProps> = ({ open, handleClose, customer, handleSave }) => { 
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
         {customer ? "Edit Customer" : "Add Customer"}
        </Typography>

        <RegisterForm onSaved={handleSave} customer={customer} />
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
