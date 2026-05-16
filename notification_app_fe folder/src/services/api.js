import axios from "axios";

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJtZWlnbmFuYXZpZ25lc2guZDIwMjJAdml0c3R1ZGVudC5hYy5pbiIsImV4cCI6MTc3ODkzMDIyMiwiaWF0IjoxNzc4OTI5MzIyLCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiN2ZhMDc2MTItYjlmYy00M2I5LTkwNWEtMGQwOTMyYTNlZjQ1IiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoibWVpZ25hbmF2aWduZXNoLmQiLCJzdWIiOiI4NTZiNzU3Ny1lMThjLTRiMzktYWE4YS1mNzRiNDRhNDhlNjMifSwiZW1haWwiOiJtZWlnbmFuYXZpZ25lc2guZDIwMjJAdml0c3R1ZGVudC5hYy5pbiIsIm5hbWUiOiJtZWlnbmFuYXZpZ25lc2guZCIsInJvbGxObyI6IjIybWlzMDM2NCIsImFjY2Vzc0NvZGUiOiJTZkZ1V2ciLCJjbGllbnRJRCI6Ijg1NmI3NTc3LWUxOGMtNGIzOS1hYThhLWY3NGI0NGE0OGU2MyIsImNsaWVudFNlY3JldCI6ImR2QmtCUUtjR3RYQlBnYlYifQ.kv1B9qmei4eS7cdbtNsx-FdWxqwWNDB4AY0ZPOZq0yQ";

export const fetchNotifications =
  async (
    page = 1,
    limit = 10,
    type = ""
  ) => {

    try {

      let url =
        `http://4.224.186.213/evaluation-service/notifications?page=${page}&limit=${limit}`;

      if (type) {

        url +=
          `&notification_type=${type}`;

      }

      const response =
        await axios.get(
          url,
          {
            headers: {
              Authorization:
                `Bearer ${TOKEN}`,
              "Content-Type":
                "application/json",
            },
          }
        );

      console.log(
        "API RESPONSE:",
        response.data
      );

      return response.data;

    } catch (error) {

      console.error(
        "API ERROR:",
        error.response?.data
        || error.message
      );

      return [];

    }

};