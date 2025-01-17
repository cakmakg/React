import React from 'react'

const RegisterForm = ({    
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,}) => {
    
  return (
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
  )
}

export default RegisterForm