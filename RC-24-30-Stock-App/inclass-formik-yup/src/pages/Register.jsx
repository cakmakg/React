import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import LockIcon from "@mui/icons-material/Lock";
import image from "../assets/regi.avif";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import AuthHeader from "../components/AuthHeader";
import AuthImage from "../components/AuthImage";
import { Formik } from "formik";
import { TextField, Button } from "@mui/material";
import * as Yup from 'yup';

const Register = () => {

  const SignupSchema = Yup.object().shape({
    username:Yup.string()
    .min(5,"Kullanıcı adı 5 karakterden az olamaz")
    .max(50,"Kullanıcı adı 50 karakterden fazla olamaz")
    .required("Kullanıcı adı zorunludur"),    
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
    .min(8,"Password 8 karakterdn fazla olmalıdır")
    .matches(/[a-z]/,"Şifre küçük harf içermelidir")
    .matches(/[A-Z]/,"Şifre büyük hark içermelidir")
    .matches(/\d+/,"Şifre sayısal karakter içermelidir.")
    .matches(/[@$?!%&*]+/, "Özel karakter içermelidir(@$?!%&*)")

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
          {/* /* -------------------------------------------------------------------------- */}
          {/* FORMİK YAPISI */}

          <Formik
            initialValues={{
              username: "",
              firstName: "",
              lastName: "",
              email: "",
              password: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={(values)=>{
              console.log(values)
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <form onSubmit={handleSubmit}>
                <TextField
                  name="username"
                  value={values.username}
                  onChange={handleChange}
                  label="Username"
                  onBlur={handleBlur} // kullanıcının input alanından ayrıldığını yaklayan event
                  error={touched.username && errors.username} //validationda verdiğimiz kalıba uymazsa ilgili mesajları göstermesi için errors dan gelen mesajı yakalıyoruz.
                  helperText={touched.username && errors.username} //validationda verdiğimiz kalıba uymazsa rengi errora çevirmesi için error attribute ı benden false/true degeri bekliyor ondan dolayı daha sağlıklı olması için boolean deger döndürüyoruz.
                  // touched da kullanıcının inputa tıklayıp tıklamadığını yakalıyor
                  variant="outlined"
                  fullWidth
                  type="text"
                  margin="normal"
                />
                  <TextField
                  name="firstName"
                  value={values.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.firstName && errors.firstName}
                  helperText={touched.firstName && errors.firstName}
                  label="First Name"
                  variant="outlined"
                  fullWidth
                  type="text"
                  margin="normal"
                />
                  <TextField
                  name="lastName"
                  value={values.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.lastName && errors.lastName}
                  helperText={touched.lastName && errors.lastName}
                  label="Last Name"
                  variant="outlined"
                  fullWidth
                  type="text"
                  margin="normal"
                />
                  <TextField
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.email && errors.email}
                  helperText={touched.email && errors.email}
                  label="Email"
                  variant="outlined"
                  fullWidth
                  type="email"
                  margin="normal"
                />




                <TextField
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.password && errors.password}
                  helperText={touched.password && errors.password}
                  label="Password"
                  variant="outlined"
                  fullWidth
                  type="password"
                  margin="normal"
                />

                <Button 
                type="submit"
                variant="contained"
                fullWidth
                margin="normal"
                >SUBMIT</Button>
              </form>
            )}
          </Formik>

          {/* /* -------------------------------------------------------------------------- */}
          <Box sx={{ textAlign: "center", mt: 2, color: "secondary.main" }}>
            <Link to="/">Already have an account? Sign in</Link>
          </Box>
        </Grid>

        <AuthImage image={image} />
      </Grid>
    </Container>
  );
};

export default Register;
