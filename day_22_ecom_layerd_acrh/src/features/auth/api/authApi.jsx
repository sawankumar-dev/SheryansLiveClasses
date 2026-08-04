import { api } from "../../../config/api";

export const loginUserApi = async (credentials) => {
  try {
    const res = await api.post("/auth/login", credentials);
    
    if (res.data?.accessToken) {
      localStorage.setItem("accessToken", res.data.accessToken);
    }
    
    return res.data;
  } catch (error) {
    console.error("Error in login API:", error.response?.data || error.message);
    throw error; // Pass error to UI to show alert/message
  }
};

export const hydrationUser = async () => {
  const token = localStorage.getItem("accessToken");
  
  // Fast exit if user is not logged in
  if (!token) {
    throw new Error("No access token found");
  }

  try {
    const res = await api.get("/auth/me", {
      headers: { 
        Authorization: `Bearer ${token}` 
      },
    });
    return res.data;
  } catch (error) {
    console.error("Error in hydration API:", error.response?.data || error.message);
    throw error;
  }
};
