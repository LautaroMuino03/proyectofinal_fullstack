import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './loginForm.css'; 

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault(); // Evita el comportamiento por defecto del formulario

        console.log('Datos enviados desde el formulario:', { email });

        try {
            const response = await fetch('http://localhost:3001/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password }),
                credentials: 'include' // Si necesitas enviar cookies
            });

            console.log('Respuesta del servidor (raw):', response);

            const data = await response.json();
            console.log('Datos recibidos del servidor (JSON):', data);

            // Modificación: Guarda el estado de autenticación y redirige al panel de administración si el inicio de sesión es exitoso
            if (response.ok && data.message === 'Inicio de sesión exitoso') {
                localStorage.setItem('isAuthenticated', 'true'); // Guarda el estado de autenticación
                alert('Inicio de sesión exitoso');
                navigate('/adminPanel'); // Redirigir al panel de administración
            } else {
                alert(data.message || 'Error al iniciar sesión');
            }
        } catch (error) {
            console.error('Error en el manejo del inicio de sesión:', error);
            alert('Error del servidor');
        }
    };

    return (
        <div className="login-form-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <h2>Iniciar Sesión</h2>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <label htmlFor="password">Contraseña</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Entrar</button>
            </form>
        </div>
    );
};

export default LoginForm;

