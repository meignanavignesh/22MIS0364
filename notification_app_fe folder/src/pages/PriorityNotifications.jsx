import {
  useEffect,
  useState
} from "react";

import {
  fetchNotifications
} from "../services/api";

import {
  getPriorityScore
} from "../utils/priority";

function PriorityNotifications() {

  const [
    priority,
    setPriority
  ] = useState([]);

  useEffect(() => {

    const loadPriority =
      async () => {

      const data =
        await fetchNotifications();

      const sorted =
        data.sort(
          (a, b) =>
            getPriorityScore(b)
            -
            getPriorityScore(a)
        );

      setPriority(
        sorted.slice(0, 10)
      );

    };

    loadPriority();

  }, []);

  return (

    <div
      style={{
        padding: "20px"
      }}
    >

      <h1>
        Priority Notifications
      </h1>

      {
        priority.map(
          (item) => (

          <div
            key={item.ID}
            style={{
              border:
                "1px solid black",
              padding: "10px",
              marginBottom: "10px",
            }}
          >

            <h3>
              {item.Type}
            </h3>

            <p>
              {item.Message}
            </p>

          </div>

        ))
      }

    </div>

  );

}

export default PriorityNotifications;