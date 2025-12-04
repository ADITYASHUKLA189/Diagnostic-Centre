import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StorageService } from '../services/storage';
import Button from '../components/Button';
import { Lock, Loader2 } from 'lucide-react';

const Login: React.FC = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    try {
      const success = await StorageService.login(password);
      if (success) {
        navigate('/admin');
      } else {
        setError('Invalid password. Try "admin123"');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1576091160550-217358c7e618?auto=format&fit=crop&q=80&w=1920" 
            alt="Medical Background" 
            className="w-full h-full object-cover opacity-5"
          />
      </div>

      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-md border border-gray-100 text-center relative z-10">
        <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-600">
          <Lock size={32} />
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Admin Login</h2>
        <p className="text-gray-500 mb-6">Enter password to access the dashboard</p>
        
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="Password"
            autoFocus
            disabled={isLoading}
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <Button type="submit" fullWidth className="py-3" disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 size={20} className="animate-spin" />
                Logging in...
              </>
            ) : 'Login'}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;