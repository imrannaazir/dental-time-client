import axios from "axios";
import { useEffect, useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    const email = user?.user?.email;
    const currentUser = { email: email };
    if (email) {
      (async () => {
        const { data } = await axios.put(
          `http://localhost:5000/users/${email}`,
          currentUser
        );
        const accessToken = data.token;
        localStorage.setItem("accessToken", accessToken);
        setToken(accessToken);
      })();
    }
  }, [user]);
  console.log(token);
  return [token];
};

export default useToken;

/* import { useEffect, useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    setToken("setho");
    const email = user?.user?.email;
    const currentUser = { email: email };
    if (email) {
      fetch(`http://localhost:5000/users/${email}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(currentUser),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("data inside useToken", data);
          const accessToken = data.token;
          localStorage.setItem("accessToken", accessToken);
        });
    }
  }, [user]);
  console.log(token);
  return [token];
};

export default useToken;
 */
