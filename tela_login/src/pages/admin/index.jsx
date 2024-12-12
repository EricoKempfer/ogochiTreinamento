import React from 'react';
import Layout from '../../Layouts/Layout';
import Products from '../../components/Products';
import { Box, HStack, Heading, Stack, Table, Flex, Text } from "@chakra-ui/react"
import { IconButton } from "@chakra-ui/react"
import { LuSearch } from "react-icons/lu"
import { IoIosAdd } from "react-icons/io";
import { MdOutlineAdd } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaSortAmountDown } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Modal } from "../../components/Modal";
import { Dialog } from "../../components/Dialog";
import { Alert } from "../../components/ui/alert"
import { useRouter } from 'next/router';

const AdminPage = () => {
  const [material, setMaterial] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const verifyAdmin = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        router.push('/');
        return;
      }

      try {
        const response = await axios.get('http://localhost:3335/fornecedor', {
          headers: { Authorization: `Bearer ${token}` }
        });

        if (response.status !== 200) {
          router.push('/');
        }
      } catch (error) {
        console.error('Error verifying admin:', error);
        router.push('/');
      }
    };

    verifyAdmin();
    fetchData();
  }, []);

  const fetchData = async() => {
    try{
    const response = await axios.get('http://localhost:3335/material')
        if (Array.isArray(response.data)) {
          setMaterial(response.data);
        }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
  }

  const deleta = async (id, setAlertVisible) => {
    try {
      const response = await axios.delete(`http://localhost:3335/material/${id}`);
      if (response.status === 200) {
        setMaterial(material.filter(item => item.id !== id));
        
      }
    } catch (error) {
      console.error('Error deleting product:', error);
      setAlertVisible(true);
      setTimeout(() => {
        setAlertVisible(false);
      }, 3000);
    }
  }

  const handleEditProduct = async (id, updatedProduct) => {
    try {
      const response = await axios.patch(`http://localhost:3335/material/${id}`, updatedProduct);
      if (response.status === 200) {
        setMaterial(material.map(item => item.id === id ? response.data : item));
        location.reload()
      }
    } catch (error) {
      console.error('Error editing product:', error);
    }
  }

  const handleAddProduct = async (product) => {
    try {
      const response = await axios.post('http://localhost:3335/material', product);
      setMaterial([...material, response.data]);
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <Layout>
      <Products material={material} deleta={deleta} handleEditProduct={handleEditProduct} handleAddProduct={handleAddProduct} />
    </Layout>
  );
};

export default AdminPage;
