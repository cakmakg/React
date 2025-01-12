import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import LockIcon from "@mui/icons-material/Lock";
import image from "../assets/regi.avif";
import Grid from "@mui/material/Grid";
import { Form, Link } from "react-router-dom";
import { Box } from "@mui/material";
import AuthHeader from "../components/AuthHeader";
import AuthImage from "../components/AuthImage";
import { Formik } from 'formik';
import {TextField, Button} from '@mui/material';
import * as Yup from 'yup';

const Register = () => {

  const SignupSchema = Yup.object().shape({
    username:Yup.string()
    .min(5, "kullanici adi 5 karakterden az olmali")
    .max(50, "kullanici adi 50 karakterden fazla olamaz")
    .required("kullanici adi zorunludur"),
    firstName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    lastName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password:Yup.string()
    .min(8,"password 8 karakterden fazla olmali")
    .matches(/[a-z]/,"sifre kucuk harf icermeli")
    .matches(/[A-Z]/,"sifre buyuk harf icermeli")
    .matches(/\d+/,"sifre sayisal karakterler icermeli")
    .matches(/[@$?!%&*]+/,"sifre özel karakter icermeli")
  });

  return (
    <Container maxWidth="lg">
      <Grid
        container
        justifyContent="center"
        direction="row-reverse"
        rowSpacing={{ sm: 3 }}
        sx={{
          height: "100vh",
          p: 2,
        }}
      >
        <AuthHeader />

        <Grid item xs={12} sm={10} md={6}>
          <Avatar
            sx={{
              backgroundColor: "secondary.light",
              m: "auto",
              width: 40,
              height: 40,
            }}
          >
            <LockIcon size="30" />
          </Avatar>
          <Typography
            variant="h4"
            align="center"
            mb={2}
            color="secondary.light"
          >
            Register
          </Typography>

          <Formik 
          initialValues={
            {username:"",
            firstname:"",
            lastname:"",
            email:"",
            password:"",
            }
            }
          validationSchema={SignupSchema}
          onSubmit={(values)=>{

          }}>
         
           {({    
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,})=>(
            <Form onSubmit={handleSubmit}>
            <TextField 
            name="username"
            value={values.username}
            onChange={handleChange} 
            label="Username" 
            onBlur={handleBlur}
            error={touched.username && errors.username}
            helperText={touched.username && errors.username}
            variant="outlined"
            fullWidth
            type="text"
            margin="normal" />

            <TextField 
            name="firstName"
            
            value={values.firstname}
            onChange={handleChange} 
            label="firstName" 
            error={touched.firstName && errors.firstName}
            helperText={touched.firstName && errors.firstName}
            variant="outlined"
            fullWidth
            type="text"
            margin="normal" />

            <TextField 
            name="lastName"
            id="outlined-basic"
            value={values.password}
            onChange={handleChange} 
            label="lastName" 
            error={touched.lastName && errors.lastName}
            helperText={touched.lastName && errors.lastName}
            variant="outlined"
            fullWidth
            type="text"
            margin="normal" /> 
             
             <TextField 
            name="email"
            id="outlined-basic"
            value={values.password}
            onChange={handleChange} 
            label="email" 
            error={touched.email && errors.email}
            helperText={touched.email && errors.email}
            variant="outlined"
            fullWidth
            type="email"
            margin="normal" />

            <TextField 
            name="password"
            
            value={values.password}
            onChange={handleChange} 
            label="Password" 
            error={touched.username && errors.username}
            helperText={touched.username && errors.username}
            variant="outlined"
            fullWidth
            type="password"
            margin="normal" />

            <Button 
            type="submit"
            variant="contained"
            fullWidth
            margin="normal"
            >Submit</Button>
            </Form>
           )}
          </Formik>



          <Box sx={{ textAlign: "center", mt: 2, color:"secondary.main" }}>
            <Link to="/">Already have an account? Sign in</Link>
          </Box>
        </Grid>

    <AuthImage image={image} />
      </Grid>
    </Container>
  );
};

export default Register;
