import React from 'react'

const LoginForm = ({    
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

export default LoginForm