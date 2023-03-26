import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import Button from "../components/Button";
import Input from "../components/Input";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const loginHandler = (e) => {
    e.preventDefault();
    console.log("Login Form Submitted!");
  };
  return (
    <div className="min-h-screen p-4 flex items-center justify-center font-metroMedium">
      <form className="max-w-[410px] mx-auto text-center basis-full">
        <Link
          to="/"
          className="bg-gray w-[64px] h-[64px] flex items-center justify-center p-2 mx-auto mb-3"
        >
          <img src="https://i.ibb.co/r566Bc7/image-75-1.png" alt="logo" />
        </Link>
        <div className="mb-7 md:mb-10">
          <h1 className="text-3xl font-metroBold">Prijava</h1>
          <p>
            Nemate račun?
            <Link to="/sign-up" className="text-primary text-sm ml-1">
              Registrirajte se
            </Link>
          </p>
        </div>
        <div className="max-w-[310px] mx-auto">
          <div className="md:ml-[-150px]">
            <div className="input-grid-1 items-center mb-2.5">
              <label
                htmlFor="username"
                className="mb-0 text-left  md:text-right text-sm text-secondary60"
              >
                Korisničko ime
              </label>
              <Input type="text" id="username" />
            </div>

            <div className="input-grid-1 items-center mb-2.5">
              <label
                htmlFor="password"
                className="mb-0 text-left  md:text-right text-sm text-secondary60"
              >
                Lozinka
              </label>
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  icon="true"
                />
                <span className="inline-block cursor-pointer absolute right-2.5 top-2.5 text-xl text-secondary60 hover:text-primary transition">
                  {showPassword ? (
                    <AiFillEyeInvisible
                      onClick={() => setShowPassword((prevState) => !prevState)}
                    />
                  ) : (
                    <AiFillEye
                      onClick={() => setShowPassword((prevState) => !prevState)}
                    />
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="md:ml-[20px] mt-[20px]">
            <Button
              type="submit"
              variant="success"
              width="w-full"
              size="lg"
              onClick={loginHandler}
            >
              Prijavi se
            </Button>

            <p className="text-right">
              <Link
                to="/forgot-password"
                className="text-secondary60 text-xs inline-block mt-[10px] hover:text-primary transition"
              >
                Zaboraviti ste lozinku?
              </Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
