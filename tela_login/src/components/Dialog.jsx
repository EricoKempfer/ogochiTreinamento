import { Button, Input, Stack } from "@chakra-ui/react"
import { Field } from "./ui/field"
import { useState } from "react"
import React from 'react';
import { RiPencilFill } from "react-icons/ri";
import { DialogBody, DialogCloseTrigger, DialogContent, DialogFooter, DialogHeader, DialogRoot, DialogTitle, DialogTrigger, DialogActionTrigger } from "./ui/dialog"

export const Dialog = ({ data, onSubmit }) => {
  const [nome, setNome] = useState(data.nome);
  const [tipo, setTipo] = useState(data.tipo);
  const [valor, setValor] = useState(data.valor);

  const handleSave = () => {
    const updatedProduct = { tipo, nome, valor };
    onSubmit(data.id, updatedProduct);
  };

  return (
    <DialogRoot>
      <DialogTrigger asChild>
        <Button size="xs" bgColor={"#004B93"} p={0} borderRadius={6}>
          <RiPencilFill />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Editar Informações</DialogTitle>
        </DialogHeader>
        <DialogBody>
          <Stack gap="4">
            <Field>
              <Field label="Tipo">
                <Input value={tipo} onChange={(e) => setTipo(e.target.value)} placeholder="Digite o Tipo" _placeholder={{ color: "gray.800" }} />
              </Field>
              <Field label="Nome">
                <Input value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Digite o Nome" _placeholder={{ color: "gray.800" }} />
              </Field>
              <Field label="Preço">
                <Input value={valor} onChange={(e) => setValor(e.target.value)} placeholder="Digite o Preço" _placeholder={{ color: "gray.800" }} />
              </Field>
            </Field>
          </Stack>
        </DialogBody>
        <DialogFooter>
          <DialogActionTrigger asChild>
            <Button variant="outline">Cancel</Button>
          </DialogActionTrigger>
          <Button onClick={handleSave}>Save</Button>
        </DialogFooter>
        <DialogCloseTrigger />
      </DialogContent>
    </DialogRoot>
  );
}