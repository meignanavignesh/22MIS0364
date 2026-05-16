import {
  useEffect,
  useState
} from "react";

import {
  fetchNotifications
} from "../services/api";

function Dashboard() {

  const [
    notifications,
    setNotifications
  ] = useState([]);

  useEffect(() => {

    const loadData =
      async () => {

      try {

        const data =
          await fetchNotifications();

        console.log(
          "FULL API DATA:",
          data
        );

        if (
          Array.isArray(data)
        ) {

          setNotifications(data);

        }

        else if (
          data.notifications
        ) {

          setNotifications(
            data.notifications
          );

        }

        else {

          setNotifications([]);

        }

      } catch (error) {

        console.error(
          "Dashboard Error:",
          error
        );

      }

    };

    loadData();

  }, []);

  return (

    <div
      style={{
        padding: "20px"
      }}
    >

      <h1>
        Notifications
      </h1>

      {
        notifications.length === 0
        ? (
          <p>
            No notifications found
          </p>
        )
        : (
          notifications.map(
            (item) => (

            <div
              key={item.ID}
              style={{
                border:
                  "1px solid gray",
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

              <small>
                {item.Timestamp}
              </small>

            </div>

          ))
        )
      }

    </div>

  );

}

export default Dashboard;