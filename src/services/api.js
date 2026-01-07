// const API_URL = "http://localhost:5000/api";
const API_URL = `${import.meta.env.VITE_API_URL}/api`;


// ADMIN LOGIN
export const adminLogin = async (data) => {
  const res = await fetch(`${API_URL}/admin/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  if (!res.ok) throw new Error("Invalid credentials");
  return res.json();
};

// GET ALL LEADS
export const getLeads = async () => {
  const token = localStorage.getItem("adminToken");

  const res = await fetch(`${API_URL}/leads`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  if (!res.ok) throw new Error("Unauthorized");
  return res.json();
};

// UPDATE LEAD
export const updateLead = async (id, data) => {
  const token = localStorage.getItem("adminToken");

  return fetch(`${API_URL}/leads/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(data)
  });
};

// DELETE LEAD
export const deleteLead = async (id) => {
  const token = localStorage.getItem("adminToken");

  return fetch(`${API_URL}/leads/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};
