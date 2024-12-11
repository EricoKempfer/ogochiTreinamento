import nodemailer from 'nodemailer';
import User from '../models/FornecedorModel';
import crypto from 'crypto';
import bcrypt from 'bcrypt';
import http from 'https';

async function send(req, res) {
  try {
    const { email } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(404).send({
        type: "error",
        message: "Account not found!"
      });
    }

    const resetToken = crypto.randomBytes(2).toString("hex");
    console.log(resetToken);

    user.recuperation = resetToken;
    await user.save();

    const smtp = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465, //465
      secure: true, // Change to true
      auth: {
        user: "ericocampos2006@gmail.com",
        pass: "assp nalk htav jtmv"
      }
    });

    function sendMail(to, sub, msg) {
      smtp.sendMail({
        from: "ericocampos2006@gmail.com", // Add from field
        to: to,
        subject: sub,
        html: msg
      }, (error, info) => {
        if (error) {
          console.error('Error sending email:', error);
        } else {
          console.log('Email sent:', info.response);
        }
      });
    };

    await sendMail(email, "Recuperação de senha", `Olá ${user.nome}, seu código de recuperação é: ${resetToken}`);

    return res.status(200).send({
      type: 'success',
      message: 'Código de recuperação enviado para o seu email'
    });
  } catch (error) {
    return res.status(500).send({
      type: 'error',
      message: 'Erro ao enviar código de recuperação',
      data: error.message
    });
  }
}

const receiveCode = async (req, res) => {
  try {
    const { code, email } = req.body;
    const user = await User.findOne({ where: { email } });

    console.log('Received code:', code); // Debugging line
    console.log('User data:', user); // Debugging line
    console.log('User recovery code:', user.recuperation); // Debugging line

    if (!user || user.recuperation !== code) {
      return res.status(400).send({
        type: "error",
        message: "Código de recuperação inválido"
      });
    }

    user.recuperation = null;
    await user.save();

    return res.status(200).send({
      type: "success",
      message: "Código de recuperação verificado com sucesso"
    });
  } catch (error) {
    return res.status(500).send({
      type: 'error',
      message: 'Erro ao verificar código de recuperação',
      data: error.message
    });
  }
}

const updatePassword = async (req, res) => {
  try {
    const { newPassword, email } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(404).send({
        type: "error",
        message: "Conta não encontrada"
      });
    }

    user.hashPassword = await bcrypt.hash(newPassword, 10);
    user.token = null;
    await user.save();

    return res.status(200).send({
      type: 'success',
      message: 'Senha atualizada com sucesso, faça login novamente'
    });
  } catch (error) {
    return res.status(500).send({
      type: 'error',
      message: 'Erro ao atualizar senha',
      data: error.message
    });
  }
}

export default {
  send,
  receiveCode,
  updatePassword
}