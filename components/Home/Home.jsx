import styles from "../../styles/Home.module.css";
import { useRouter } from "next/router";
import { useState } from "react";

const Home = () => {
  const router = useRouter();

  const [query, setQuery] = useState({
    name: "",
    skip: 0,
    limit: 5,
  });

  const handleQueryChange = (key, value) => {
    setQuery((prev) => {
      const query = { ...prev, [key]: value };

      router.replace({
        pathname: "/users",
        query: query,
      });

      return query;
    });
  };

  // const handleInputChange = (e) => {
  //   setQuery({ ...query, name: e.target.value });

  //   router.replace({
  //     pathname: "/users",
  //     query: { ...query, name: e.target.value },
  //   });
  // };

  // const handleSkipChange = (e) => {
  //   setQuery({ ...query, skip: e.target.value });

  //   router.replace({
  //     pathname: "/users",
  //     query: { ...query, skip: e.target.value },
  //   });
  // };

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
