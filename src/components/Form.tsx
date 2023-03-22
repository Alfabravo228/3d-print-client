import styles from '../styles/Form.module.scss'
import { useState } from 'react';
import { Button, Input, TextField } from '@mui/material';
import { sendContactForm } from '@/lib/api';

const Form = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(event.target.value);
  };

  const handleMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };


  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await sendContactForm({ 'username': username, 'email': email, 'phone': phone, 'message': message })
    } catch (error) {
      return { message: error }
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <TextField
        className={styles.textField}
        label="Ім'я"
        type="text"
        value={username}
        onChange={handleUsernameChange}
        margin="normal"
        variant="outlined"
      />
      <TextField
        className={styles.textField}
        label="Електронна пошта"
        type="email"
        value={email}
        onChange={handleEmailChange}
        fullWidth
        margin="normal"
        variant="outlined"
      />
      <TextField
        className={styles.textField}
        label="Номер телефону"
        type="text"
        value={phone}
        onChange={handlePhoneChange}
        fullWidth
        margin="normal"
        variant="outlined"
      />
      <TextField
        className={styles.textField}
        label="Повідомлення"
        type="text"
        value={message}
        onChange={handleMessageChange}
        fullWidth
        margin="normal"
        variant="outlined"
      />
      <Button
        className={styles.button}
        type="submit"
        variant="contained"
        color="primary">
        Відправити
      </Button>
    </form>
  );
};

export default Form;