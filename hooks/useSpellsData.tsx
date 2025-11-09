import { useState, useEffect } from "react";

const useSpellsData = () => {
  const [data, setData] = useState<any[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchSpells = async () => {
    try {
      const response = await fetch("https://wizard-world-api.herokuapp.com/Spells");

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const json = await response.json();
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setData(json);
    } catch (err: any) {
      console.error("Error fetching spells:", err.message);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSpells();
  }, []);

  return { data, loading, error };
};

export default useSpellsData;

