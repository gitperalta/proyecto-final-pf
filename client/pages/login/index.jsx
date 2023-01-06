import { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useDispatch } from "react-redux";
import Link from "next/link";
import { postUser } from "../../stores/actions";

export default function () {
  const { data: session } = useSession();

  const dispatch = useDispatch();
  const [input, setInput] = useState({
    name: "",
    age: 0,
    bio: "",
    image: "",
    email: "",
    password: "",
  });

  const handlerChange = (event) => {
    event.preventDefault();
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };

  const handlerSubmitRegister = async (event) => {
    event.preventDefault();
    dispatch(postUser(input));
    setInput({
      name: "",
      age: 0,
      bio: "",
      image: "",
      email: "",
      password: "",
    });
  };
  return (
    <>
      {session ? (
        <div>
          <h1>¡Ya iniciaste sesión!</h1>
          <p>
            Ve al perfil de <Link href={"/profile"}>{session.user.name}</Link>.
          </p>
          <Link href={"/"}>Home</Link>
          <br />
          <button onClick={() => signOut()}>Cerrar Sesión</button>
        </div>
      ) : (
        <div>
          <div>
            <h1>LOG IN</h1>
            <form>
              <div>
                <label>Name: </label>
                <input
                  type="text"
                  name="name"
                  value={input.name}
                  onChange={(event) => handlerChange(event)}
                ></input>
              </div>
              <div>
                <label>Age: </label>
                <input
                  type="number"
                  name={"age"}
                  value={input.age}
                  onChange={(event) => handlerChange(event)}
                ></input>
              </div>
              <div>
                <label>Bio: </label>
                <input
                  type="text"
                  name={"bio"}
                  value={input.bio}
                  onChange={(event) => handlerChange(event)}
                ></input>
              </div>
              <div>
                <label>Image: </label>
                <input
                  type="text"
                  name={"image"}
                  value={input.image}
                  onChange={(event) => handlerChange(event)}
                ></input>
              </div>
              <div>
                <label>Email: </label>
                <input
                  type="text"
                  name={"email"}
                  value={input.email}
                  onChange={(event) => handlerChange(event)}
                ></input>
              </div>
              <div>
                <label>Password: </label>
                <input
                  type="password"
                  name={"password"}
                  value={input.password}
                  onChange={(event) => handlerChange(event)}
                ></input>
              </div>
              <button
                type="submit"
                onClick={(event) => handlerSubmitRegister(event)}
              >
                Log in
              </button>
            </form>
          </div>
          <br />
          
          <br />
          <p>
            ¿Ya tienes una cuenta? <Link href={"/signup"}>Inicia Sesion</Link>
          </p>
          <br />
          <br />
          <div>
            <h1>SIGN IN WITH FACEBOOK OR GOOGLE</h1>
            <button onClick={() => signIn()}>
              Sign in with Facebook or Google
            </button>
          </div>
        </div>
      )}
    </>
  );
}