import styles from "../../styles/Home.module.css";
import { useRouter } from "next/router";
import { useState } from "react";

const Home = () => {
  const router = useRouter();

  const [query, setQuery] = useState("");
  const [skip, setSkip] = useState(0);
  const [limit, setLimit] = useState(5);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    router.push(`/users/search?name=${value}&skip=${skip}&limit=${limit}`);
  };

  const handleSkipChange = (e) => {
    const value = e.target.value;
    setSkip(value);

    router.push(`/users/search?name=${query}&skip=${value}&limit=${limit}`);
  };

  const handleLimitChange = (e) => {
    const value = e.target.value;
    setLimit(value);

    router.push(`/users/search?name=${query}&skip=${skip}&limit=${value}`);
  };

  return (
    <div className={styles.home}>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Type to search..."
      />

      <select value={skip} onChange={handleSkipChange}>
        <option value={0}>Skip 0</option>
        <option value={5}>Skip 5</option>
      </select>

      <select value={limit} onChange={handleLimitChange}>
        <option value={5}>Limit 5</option>
        <option value={10}>Limit 10</option>
      </select>
    </div>
  );
};

export default Home;
