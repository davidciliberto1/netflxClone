import React, { useEffect, useState } from "react";
import useForm from "../hooks/useForm";
import { Link, Routes, useNavigate } from "react-router-dom";

const Login = () => {
  const { form, handleChange, handleSubmit } = useForm({
    user: "",
    password: "",
  });
  useEffect(() => {

  
    return () => {
      
    }
  }, [form])
  
 

  return (
    <div style={styles.container}>
      <svg
        style={styles.imgBg}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#a2d9ff"
          fillOpacity="1"
          d="M0,96L48,133.3C96,171,192,245,288,240C384,235,480,149,576,128C672,107,768,149,864,186.7C960,224,1056,256,1152,250.7C1248,245,1344,203,1392,181.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        />
      </svg>
      <div style={styles.login}>
        <div style={styles.title}>
          <h1>Iniciar Sesión</h1>
        </div>

        <form>
          <input
            type="text"
            placeholder="Usuario"
            style={styles.input}
            name="user"
            onChange={handleChange}
            value={form.user}
          />
          <input
            type="password"
            placeholder="Contraseña"
            autoComplete="password"
            style={styles.input}
            name="password"
            onChange={handleChange}
            value={form.name}
          />
          <input type="submit" style={styles.button} onClick={handleSubmit} />
          <h1>Holiiis</h1>
        </form>

      
        
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "100vw",
  },
  title: {
    fontSize: "large",
    fontWeight: "bold",
    marginBottom: "1rem",
    textAlign: "center",
  },
  login: {
    width: "400px",
    padding: "40px",
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 0 20px rgba(0,0,0,0.1)",
  },
  input: {
    width: "100%",
    marginBottom: "20px",
    border: "none",
    borderBottom: "2px solid #ccc",
    outline: "none",
    padding: "10px",
  },
  button: {
    width: "100%",
    backgroundColor: "#a2d9ff",
    color: "#fff",
    border: "none",
    padding: "10px",
    borderRadius: "5px",
    cursor: "pointer",
  },
  imgBg: {
    position: "absolute",
    top: "0",
    left: "0",
    zIndex: "-1",
  },
};

export default Login;
