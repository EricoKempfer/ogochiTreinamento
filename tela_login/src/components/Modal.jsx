import React, { useState } from "react";
import { sendDataToAPI } from "../utils/axios";
// Remove the global CSS import
// import "./Modal.css";

import styles from "./Modal.module.css";

export const Modal = ({ closeModal, onSubmit, defaultValue }) => {
  const [formState, setFormState] = useState(
    defaultValue || {
      page: "",
      description: "",
      status: "live",
    }
  );

  
  const [tipo, setTipo] = useState('');
	const [nome, setNome] = useState('');
	const [valor, setValor] = useState('');

  const handleProduto = async (e) => {
    e.preventDefault();
    const payload = { tipo, nome, valor};
    try {
      await onSubmit(payload);
      closeModal();
    } catch (error) {
      console.error('Erro ao realizar cadastro:', error);
    }
  };

  return (
    <div
      className={styles.modalContainer}
      onClick={(e) => {
        if (e.target.className === styles.modalContainer) closeModal();
      }}
    >
      <div className={styles.modal}>
        <form>
          <div className={styles.formGroup}>
            <label htmlFor="tipo">Tipo</label>
            <input name="tipo" onChange={(e) => setTipo(e.target.value)} value={tipo} />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="Nome">Nome</label>
            <input
              name="nome"
              onChange={(e) => setNome(e.target.value)}
              value={nome}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="preço">Preço</label>
            <input
              name="preço"
              onChange={(e) => setValor(e.target.value)}
              value={valor}
            />
          </div>
          <button type="submit" className={styles.btn} onClick={handleProduto}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};