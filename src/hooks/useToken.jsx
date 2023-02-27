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
          `https://dental-time.onrender.com/users/${email}`,
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
