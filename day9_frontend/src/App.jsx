import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";
import { use } from "react";
function App() {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [oldemail, SetOldEmail] = useState("");
  const [phone, SetPhone] = useState("");
  const [oldusername, SetOldUsername] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:3000/product")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const handlesubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/user/login", { email, password })
      .then((res) => {
        // store in local storage
        localStorage.setItem("token", res.data.token);
        console.log(res.data);
      });
  };

  const handleupdateprofile = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    axios
      .patch(
        "http://localhost:3000/user/updateprofile",
        {
          email: oldemail,
          phone,
          username: oldusername,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        console.log(res.data);
      });
  };

  return (
    <>
      <h1>Product List</h1>
      {products.map((products) => {
        return (
          <div key={products._id}>
            <h1>{products.title}</h1>
          </div>
        );
      })}
      <h1>Login</h1>
      <form onSubmit={handlesubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>

      <h1>Update Profile</h1>
      <form onSubmit={handleupdateprofile}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={oldemail}
          onChange={(e) => SetOldEmail(e.target.value)}
        />
        <label htmlFor="username">username</label>
        <input
          type="username"
          name="username"
          value={oldusername}
          onChange={(e) => SetOldUsername(e.target.value)}
        />
        <label htmlFor="phone">Phone</label>
        <input
          type="phone"
          name="phone"
          value={phone}
          onChange={(e) => SetPhone(e.target.value)}
        />
        <button type="submit">Update</button>
      </form>
    </>
  );
}

export default App;
