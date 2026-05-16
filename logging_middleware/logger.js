const axios = require("axios");

const LOG_API =
  "http://4.224.186.213/evaluation-service/logs";

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJtZWlnbmFuYXZpZ25lc2guZDIwMjJAdml0c3R1ZGVudC5hYy5pbiIsImV4cCI6MTc3ODkzMDIyMiwiaWF0IjoxNzc4OTI5MzIyLCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiN2ZhMDc2MTItYjlmYy00M2I5LTkwNWEtMGQwOTMyYTNlZjQ1IiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoibWVpZ25hbmF2aWduZXNoLmQiLCJzdWIiOiI4NTZiNzU3Ny1lMThjLTRiMzktYWE4YS1mNzRiNDRhNDhlNjMifSwiZW1haWwiOiJtZWlnbmFuYXZpZ25lc2guZDIwMjJAdml0c3R1ZGVudC5hYy5pbiIsIm5hbWUiOiJtZWlnbmFuYXZpZ25lc2guZCIsInJvbGxObyI6IjIybWlzMDM2NCIsImFjY2Vzc0NvZGUiOiJTZkZ1V2ciLCJjbGllbnRJRCI6Ijg1NmI3NTc3LWUxOGMtNGIzOS1hYThhLWY3NGI0NGE0OGU2MyIsImNsaWVudFNlY3JldCI6ImR2QmtCUUtjR3RYQlBnYlYifQ.kv1B9qmei4eS7cdbtNsx-FdWxqwWNDB4AY0ZPOZq0yQ";

async function Log(
  stack,
  level,
  packageName,
  message
) {
  try {

    const response = await axios.post(
      LOG_API,
      {
        stack: stack,
        level: level,
        package: packageName,
        message: message,
      },
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );

    console.log(
      "Log Created Successfully:",
      response.data
    );

    return response.data;

  } catch (error) {

    console.error(
      "Logging Failed:",
      error.response?.data || error.message
    );

  }
}

module.exports = Log;