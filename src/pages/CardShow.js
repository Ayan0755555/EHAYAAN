import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";

const FetchDataFromAPI = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/auto/all_auto"
        );
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-12 mt-10 text-center">ALL Auto</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {data.map((item, index) => (
            <div
              key={index}
              className="border p-4 rounded bg-black shadow-md card"
            >
              <img
                src={item.image}
                alt={item.name}
                className="mb-2 w-full h-auto pointpic"
              />
              <p className="text-lg text-green-900 font-bold mb-2">
                Name- {item.name}
              </p>
              <p className="text-gray-600 mb-2">Location- {item.location}</p>
              <p className="text-gray-600 mb-2">Area- {item.area}</p>
              <p className="text-gray-600 mb-2">phone No- {item.phone}</p>
              {/* Add more fields here as needed */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FetchDataFromAPI;
