import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";

export const Login = () => {
  return (
    <div className="bg-indigo-800 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-[12px] bg-white w-80 text-center p-2 h-max px-8">
          <Heading label={"Login to your account"} />
          <InputBox placeholder="manoj@richpanel.com" label={"Email"} />
          <InputBox type="password" placeholder="password" label={"Password"} />

          <div className="flex align-start pt-1">
            <input type="checkbox" className="mr-2" />
            <label htmlFor="rememberMe" className="text-xs">
              Remember Me
            </label>
          </div>

          <div className="pt-6">
            <Button label={"Login"} />
          </div>

          <BottomWarning
            label={"New to MyApp?"}
            buttonText={"Sign Up"}
            to={"/register"}
          />
        </div>
      </div>
    </div>
  );
};
