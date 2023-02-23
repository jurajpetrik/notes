import axios from "axios";

const API = axios.create({
  baseURL: `http://localhost:8080/`
});

// takes a credential from GoogleLogin's response as input,
// does a request to auth/login/oauth and returns the return JWT accessToken
export async function oauthLogin(credential) {
  const resp = await API.post(
    "auth/login/oauth",
    {
      token: credential,
    }
  );
  const accessToken = resp.data.access_token
  return accessToken;
}

export async function getNotes(authToken) {
  const resp = await API.get(
    "notes",
    {
      headers: {
        "Authorization": `Bearer ${authToken}`
      }
    }
  )
  return resp.data;
}

export async function getNote(id, authToken) {
  const resp = await API.get(
    `notes/${id}`,
    {
      headers: {
        "Authorization": `Bearer ${authToken}`
      }
    }
  )
  return resp.data;
}

export async function createNote(note, authToken) {
  const resp = await API.post(
    "notes", note, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${authToken}`
    },
  })
  return resp.data;
}
