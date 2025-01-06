import { Avatar, Box, Button, Container, TextField, Typography } from '@mui/material'
import React from 'react'



const Login = () => {
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar
          sx={{ width: 100, height: 100 }}
          src="https://cdn.pixabay.com/photo/2017/03/21/02/00/user-2160923_960_720.png"
        />
        <Typography component="h1" variant="h5">
          Sign In
        </Typography>
        {/* noValidate=doğrulanmasın
        autocomplete=Otomatik Tamamlama listesi, siz yazmaya başladığınızda adlara ve e-posta adreslerine ilişkin önerileri görüntüleyen bir özelliktir. Bu öneriler, gönderdiğiniz e-posta mesajlarındaki ad ve e-posta adresleri listesindeki olası eşleşmelerdir.
         */}
        <Box noValidate component="form" sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
          />
          <Button type="submit" fullWidth variant="contained" color="secondary">SignIn</Button>
        </Box>
      </Box>
    </Container>
  );
}

export default Login