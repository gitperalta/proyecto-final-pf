import React, { useEffect, useState } from "react";
import Navbar from "../../components/admin/Navbar.jsx";
import Products from "../../components/admin/Products/Products";
import Pets from "../../components/admin/Posts/Posts";
import Sales from "../../components/admin/Sales/Sales.jsx";
import styles from "./admin.module.css";
import Users from "../../components/admin/Users/Users";
import ShowChartIcon from '@mui/icons-material/ShowChart';
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { getUserById } from "../../controller/functionsUser/getUserById.js";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
import { authUser } from "../../stores/actions";
import { useDispatch, useSelector } from "react-redux";
import GroupIcon from "@mui/icons-material/Group";
import StorefrontIcon from "@mui/icons-material/Storefront";
import Link from "next/link";
import Image from "next/image";
import logo from "../../img/logo.jpeg";
import ImageIcon from "@mui/icons-material/Image";
import Charts from "../../components/admin/Charts/Charts.jsx";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { RiLogoutBoxLine } from "react-icons/ri";
import Reported from "../../components/admin/Reports/Reports.jsx";
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
const fn = (user, dispatch, setNumCall) => {
  if (user) {
    const sub = user.sub.split("|");
    if (sub[0] === "google-oauth2") {
      dispatch(
        authUser(`${user.nickname}@gmail.com`, user.name || user.nickname)
      );
    } else {
      dispatch(authUser(user.name, null));
    }
  }
  setNumCall(1);
};

const Admin = withPageAuthRequired(() => {
  const { user } = useUser();

  const dispatch = useDispatch();
  const [numCall, setNumCall] = useState(0);
  !numCall && user && fn(user, dispatch, setNumCall);
  const userAuth = useSelector((state) => state.userAuth.userData);

  const [Render, setRender] = useState();
  const router = useRouter();

  let id = userAuth && userAuth._id;
  const { data: dbUser, isLoading } = useQuery(["user", id], () =>
    getUserById(id)
  );
  
  useEffect(() => {
    if (!isLoading && dbUser.administrator === false) {
      Swal.fire({
        icon: "warning",
        title: "Acceso denegado",
        text: "La ruta a la que intentó acceder es solo para administradores",
        showCloseButton: false,
        showCancelButton: false,
        link: "/home",
        iconColor: "#415D43",
        allowOutsideClick: false,
        allowEscapeKey: false,
      });
      router.push("/home");
    }
  }, [isLoading]);

  const handlerOnClick = (e, component) => {
    e.preventDefault;
    setRender(component);
  };

  useEffect(() => {
    {
      setRender( <Charts />);
    }
  }, []);

  return (
    <div>
      <div className="navAd">
        <Navbar />
      </div>
      <div className={styles.sidebar}>
          <Link href={"/home"} className={styles.linkLogo}>
            <Image
              src={logo}
              alt="logo"
              className={styles.logo}
              width="auto"
              height="auto"
            />
          </Link>
          <div key="customers">
            <p className="text-gray-400 dark:text-gray-400 m-1 mt-32 uppercase">
              Dashboard
            </p>
            <button
              className={styles.btn}
              onClick={(e) => handlerOnClick(e, <Charts />)}
            >
              <ShowChartIcon />
              Gráficos
            </button>
            <button
              className={styles.btn}
              onClick={(e) => handlerOnClick(e, <Products />)}
            >
              <StorefrontIcon />
              Productos
            </button>
            <button
              className={styles.btn}
              onClick={(e) => handlerOnClick(e, <Sales />)}
            >
              <ShoppingCartIcon />
              Ventas
            </button>
            <button
              className={styles.btn}
              onClick={(e) => handlerOnClick(e, <Users />)}
            >
              <GroupIcon />
              Usuarios
            </button>
            <button
              className={styles.btn}
              onClick={(e) => handlerOnClick(e, <Pets />)}
            >
              <ImageIcon />
              Publicaciones
            </button>
            <button
              className={styles.btn}
              onClick={(e) => handlerOnClick(e, <Reported />)}
            >
              <ReportProblemIcon />
              Denuncias
            </button>
           
              <button className={styles.logOut}>
              <RiLogoutBoxLine size={25}></RiLogoutBoxLine>
              <a href="/api/auth/logout">Cerrar sesión</a>
              </button>
              
          </div>
        </div>
      <div>
        <div>
          <section>{Render}</section>
        </div>
 
       
      </div>
      
    
    </div>
  );
});

export default Admin;
