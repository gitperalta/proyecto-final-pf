import axios from "axios";

export function formatItemsMp() {

  const productstotal = JSON.parse(localStorage.getItem("cart"));
  console.log(productstotal)
  console.log(productstotal)
  console.log(productstotal)
    if (productstotal) {
      
      /* let item= [{
        name:"productos varios",
        price:total,
    }] */
    const payment = axios
      .post(
        "/payment",
        productstotal
      ) //item)
      .then(
        (res) => (window.location.href = res.data.response.body.init_point)
      );
                      return payment;
    } 


    }
    

export function formatOneItemMP(products) {

  if (products){
        const payment = axios
          .post(
            "https://proyecto-final-pf-production.up.railway.app/payment",
            products
          )
          .then(
            (res) => (window.location.href = res.data.response.body.init_point)
          );
                      return payment;


    }
    
}