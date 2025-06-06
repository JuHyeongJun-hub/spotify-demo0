import { Alert } from '@mui/material'
import React, { JSX } from 'react'

interface ErrorMessageProps {
    errorMessage: string;
}

const ErrorMessage = ({errorMessage} : ErrorMessageProps) : JSX.Element => {
  return (
    <Alert severity="error">{errorMessage}</Alert>
  )
}

export default ErrorMessage