'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../../../../firebase';
import Link from 'next/link';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  
  // Google sağlayıcısını oluştur
  const googleProvider = new GoogleAuthProvider();

  const handleSubmit = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log('Sign in successful:', userCredential.user);
        router.push('/home');
      })
      .catch((error) => {
        console.error('Error:', error.code, error.message);
      });
  };

  // Google Sign-In ile giriş yapma
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log('Google Sign in successful:', result.user);
        router.push('/home');  // Başarılı giriş sonrası yönlendirme
      })
      .catch((error) => {
        console.error('Google Sign-In Error:', error.code, error.message);
      });
  };

  return (
    <div className="auth-container">
      <h2>Sign in</h2>
      <form className="auth-form" onSubmit={handleSubmit}>
        <div>
          <label>Email address:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Password:</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <button type="submit" className="auth-button">Sign in</button>
      </form>

      {/* Google ile giriş yap butonu */}
      <button onClick={handleGoogleSignIn} className="auth-button">Sign in with Google</button>

      <div className="auth-footer">
        <p>Don't have an account? <Link href="/auth/register">Register</Link></p>
      </div>
    </div>
  );
};

export default Login;
