import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import Button from "../components/Button";
import Input from "../components/Input";

const ResetPassword = () => {
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showNewConfirmPassword, setShowNewConfirmPassword] = useState(false);
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
          <p>Unesite Vašu novu lozinku</p>
        </div>

        <div className="max-w-[310px] mx-auto">
          <div className="md:ml-[-150px]">
            <div className="input-grid-1 items-center mb-2.5">
              <label
                htmlFor="password"
                className="mb-0 text-left  md:text-right text-sm text-secondary60"
              >
                Nova lozinka
              </label>
              <div className="relative">
                <Input
                  type={showNewPassword ? "text" : "password"}
                  id="password"
                  icon="true"
                />
                <span className="inline-block cursor-pointer absolute right-2.5 top-2.5 text-xl text-secondary60 hover:text-primary transition">
                  {showNewPassword ? (
                    <AiFillEyeInvisible
                      onClick={() =>
                        setShowNewPassword((prevState) => !prevState)
                      }
                    />
                  ) : (
                    <AiFillEye
                      onClick={() =>
                        setShowNewPassword((prevState) => !prevState)
                      }
                    />
                  )}
                </span>
              </div>
            </div>
            <div className="input-grid-1 items-center mb-2.5">
              <label
                htmlFor="confirm-password"
                className="mb-0 text-left  md:text-right text-sm text-secondary60"
              >
                Ponovite lozinku
              </label>
              <div className="relative">
                <Input
                  type={showNewConfirmPassword ? "text" : "password"}
                  id="confirm-password"
                  icon="true"
                />
                <span className="inline-block cursor-pointer absolute right-2.5 top-2.5 text-xl text-secondary60 hover:text-primary transition">
                  {showNewConfirmPassword ? (
                    <AiFillEyeInvisible
                      onClick={() =>
                        setShowNewConfirmPassword((prevState) => !prevState)
                      }
                    />
                  ) : (
                    <AiFillEye
                      onClick={() =>
                        setShowNewConfirmPassword((prevState) => !prevState)
                      }
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
              Resetiraj
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ResetPassword;
