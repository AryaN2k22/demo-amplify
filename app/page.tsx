"use client";
import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import ConfigureAmplify from '@/utils/configureAmplify';
export default function App() {
  return (
    <Authenticator loginMechanisms={['email']} signUpAttributes={['email']}>
      
    </Authenticator>
  );
}
