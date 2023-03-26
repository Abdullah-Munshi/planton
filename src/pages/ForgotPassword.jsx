import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";

const ForgotPassword = () => {
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
          <h1 className="text-3xl font-metroBold">Zaboravljena lozinka</h1>
          <p>Unesite Vaše korisničko ime</p>
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
              <Input type="email" id="username" />
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
              Resetiraj
            </Button>

            <p className="text-right">
              <Link
                to="/sign-in"
                className="text-secondary60 text-xs inline-block mt-[10px] hover:text-primary transition"
              >
                Povratak
              </Link>
            </p>
          </div>

          <p className="toast-text">
            Link za resetiranje lozinke je uspješno poslan na Vašu e-mail adresu
          </p>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
