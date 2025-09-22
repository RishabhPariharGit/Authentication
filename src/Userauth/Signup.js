import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "../globalstyle.css";

const Signup = ({ switchToLogin }) => {
  const [message, setMessage] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await fetch("http://localhost:4000/api/users/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      if (res.ok) {
        setMessage("✅ Signup successful! Please login.");
        // After signup, switch to login page
        setTimeout(() => switchToLogin(), 1500);
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
        className="signup-form-primary-wrapper"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          type="text"
          {...register("name", { required: true })}
          placeholder="Name"
        />
        {errors.name && <span style={{ color: "red" }}>*Name* is mandatory</span>}

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

        <input type="submit" style={{ backgroundColor: "#a1eafb" }} />
      </form>

      {message && <p style={{ color: "blue" }}>{message}</p>}

      <div className="signup-message-primary-wrapper">
        Already have an account?{" "}
        <span
          onClick={switchToLogin}
          style={{ color: "blue", cursor: "pointer" }}
        >
          Login
        </span>
      </div>
    </div>
  );
};

export default Signup;
