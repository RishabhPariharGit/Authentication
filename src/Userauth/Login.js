import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import "../globalstyle.css";

const Login = ({ switchToSignup }) => {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await fetch("http://localhost:4000/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      if (res.ok) {
        setMessage("✅ Login successful");
        // Store token + user info
        localStorage.setItem("token", result.token);
        localStorage.setItem("user", JSON.stringify(result.user));

        // Redirect to /profile after 1 second
        setTimeout(() => {
          navigate("/profile");
        }, 1000);
      } else {
        setMessage("❌ " + result.message);
      }
    } catch (err) {
      console.error(err);
      setMessage("❌ Something went wrong");
    }
  };

  return (
    <div className="main-container-primary-wrapper">
      <form
        className="login-form-primary-wrapper"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          type="email"
          {...register("email", { required: true })}
          placeholder="Email"
        />
        {errors.email && <span style={{ color: "red" }}>*Email* is mandatory</span>}

        <input
          type="text"
          {...register("username", { required: true })}
          placeholder="Username"
        />
        {errors.username && <span style={{ color: "red" }}>*Username* is mandatory</span>}

        <input
          type="password"
          {...register("password", { required: true })}
          placeholder="Password"
        />
        {errors.password && (
          <span style={{ color: "red" }}>*Password* is mandatory</span>
        )}

        <input className="main-submit-button-rp" type="submit"  />
      </form>

      {message && <p style={{ color: "blue" }}>{message}</p>}

      <div className="signup-message-primary-wrapper">
        Don't have an account?{" "}
        <span className="signin-text"
          onClick={switchToSignup}
        >
            <Link to="/signup" style={{ color: "black", cursor: "pointer" }}>
          Signup
        </Link>
        </span>
      </div>
    </div>
  );
};

export default Login;
