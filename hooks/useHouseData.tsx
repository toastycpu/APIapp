import { useState, useEffect } from "react";

const useHousesData = () => {
  const [data, setData] = useState<any[] | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchHousesData = async () => {
    try {
      const response = await fetch("https://wizard-world-api.herokuapp.com/Houses");
      const json = await response.json();
      await new Promise((resolve) => setTimeout(resolve, 1000)); // optional delay
      console.log("Fetched Houses:", json.length);
      setData(json);
    } catch (error) {
      console.error("Error fetching houses:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHousesData();
  }, []);

  return { data, loading };
};

export default useHousesData;




