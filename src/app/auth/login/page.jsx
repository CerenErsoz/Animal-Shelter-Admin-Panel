'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../../firebase';
import Link from 'next/link';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log('Giriş başarılı:', userCredential.user);
        router.push('/');
      })
      .catch((error) => {
        console.error('Hata:', error.code, error.message);
      });
  };

  return (
    <div className="auth-container">
      <h2>Giriş Yap</h2>
      <form className="auth-form" onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Şifre:</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">Giriş Yap</button>
      </form>
      <div className="auth-footer">
        <p>Hesabın yok mu? <Link href="/auth/register">Kayıt Ol</Link></p>
      </div>
    </div>
  );
};

export default Login;
