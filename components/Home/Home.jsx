import styles from "../../styles/Home.module.css";
import { useRouter } from "next/router";
import { useState } from "react";

const Home = () => {
  const router = useRouter();
  const [timer, setTimer] = useState(null);

  const [query, setQuery] = useState({
    name: "",
    skip: 0,
    limit: 5,
  });

  const handleQueryChange = (key, value) => {
    const updatedQuery = { ...query, [key]: value };
    setQuery(updatedQuery);

    // Clear any previously set timeout to prevent making unnecessary API calls
    if (timer) {
      clearTimeout(timer);
    }

    // Set a new timeout to delay the API call for 500ms
    const newTimer = setTimeout(() => {
      router.replace({
        pathname: "/users",
        query: updatedQuery,
      });
    }, 500);

    setTimer(newTimer);
  };

  const handleLimitChange = (e) => {
    setQuery({ ...query, limit: e.target.value });

    router.replace({
      pathname: "/users",
      query: { ...query, limit: e.target.value },
    });
  };

  return (
    <div className={styles.home}>
      <input
        type="text"
        value={query.name}
        onChange={(e) => handleQueryChange("name", e.target.value)}
        placeholder="Type to search..."
      />

      <select
        value={query.skip}
        onChange={(e) => handleQueryChange("skip", e.target.value)}
      >
        <option value={0}>Skip 0</option>
        <option value={5}>Skip 5</option>
      </select>

      <select value={query.limit} onChange={handleLimitChange}>
        <option value={5}>Limit 5</option>
        <option value={10}>Limit 10</option>
      </select>
    </div>
  );
};

export default Home;
