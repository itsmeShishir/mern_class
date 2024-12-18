import { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";

function HomePage() {
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
        localStorage.setItem("username", res.data.username);
        localStorage.setItem("email", res.data.email);
        localStorage.setItem("role", res.data.role);
        console.log(res.data);
      });
  };
  const usernamess = localStorage.getItem("username");
  const emailss = localStorage.getItem("email");
  const roless = localStorage.getItem("role");

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
      <h1>Your details</h1>
      {!usernamess && !emailss && !roless ? (
        <h1>Not logged in</h1>
      ) : (
        <div>
          <h1>Username: {usernamess}</h1>
          <h1>Email: {emailss}</h1>
          <h1>Role: {roless}</h1>
        </div>
      )}
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

export default HomePage;
