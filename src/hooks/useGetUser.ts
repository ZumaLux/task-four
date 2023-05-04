import { fetchNextUser, fetchUser } from "../api/fetchUser";
import { useState, useEffect } from "react";
import { User } from "../components/UserCard";

const useGetUser = () => {
  const [users, setUser] = useState<Array<User>>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setIsLoading(true);
    fetchUser()
      .then((user) => {
        setUser(user.results);
      })
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));
  }, []);

  const getNextUser = () => {
    setIsLoading(true);
    fetchNextUser(page)
      .then((user) => {
        if (!user.results) throw new Error("Couldn't fetch the data!");
        setUser((prev) => [...prev, ...user.results]);
        setPage((prev) => prev++);
      })
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));
  };

  return { users, isLoading, error, getNextUser };
};

export default useGetUser;
