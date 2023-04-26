import { ThaughtDeleteData, ThaughtFormData, ThaughtsState } from "./thaughtSlice";

const API_URL = "http://localhost:3000/thaughts";

export async function fetchThaughts() {
    return fetch(`${API_URL}/thaughts.json`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .catch((error) => {
        console.log("Error: ", error);
        return {} as ThaughtsState;
      });
  }

  export async function createThaught(payload: ThaughtFormData) {
    const thaught = payload.thaught;
    return fetch(`${API_URL}/thaughts.json`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        thaught,
      }),
    })
      .then((response) => response.json())
      .catch((error) => {
        console.log("Error: ", error);
        return {} as ThaughtsState;
      });
  }
  export async function updateThaught(payload: ThaughtFormData) {
    const thaught = payload.thaught;
    return fetch(`${API_URL}/thaughts/${thaught.id}.json`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        thaught,
      }),
    })
      .then((response) => response.json())
      .catch((error) => {
        console.log("Error: ", error);
        return {} as ThaughtsState;
      });
  }
  
  export async function destroyThaught(payload: ThaughtDeleteData) {
    const thaught = payload.thaught;
    return fetch(`${API_URL}/thaughts/${thaught.thaught_id}.json`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        thaught,
      }),
    })
      .then((response) => response.json())
      .catch((error) => {
        console.log("Error: ", error);
        return {} as ThaughtsState;
      });
  }