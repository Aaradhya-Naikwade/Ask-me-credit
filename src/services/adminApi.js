const API_URL = import.meta.env.VITE_API_URL;

/* ---------- ADMIN LOGIN ---------- */
export const adminLogin = async (email, password) => {
  const res = await fetch(`${API_URL}/api/admin/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  });

  if (!res.ok) {
    throw new Error("Invalid credentials");
  }

  return res.json();
};

/* ---------- GET ALL LEADS ---------- */
export const getLeads = async () => {
  const token = localStorage.getItem("adminToken");

  const res = await fetch(`${API_URL}/api/leads`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  if (!res.ok) {
    throw new Error("Unauthorized");
  }

  return res.json();
};

/* ---------- UPDATE STATUS ---------- */
export const updateLeadStatus = async (id, status) => {
  const token = localStorage.getItem("adminToken");

  const res = await fetch(`${API_URL}/api/leads/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ status })
  });

  return res.json();
};

/* ---------- DELETE LEAD ---------- */
export const deleteLead = async (id) => {
  const token = localStorage.getItem("adminToken");

  const res = await fetch(`${API_URL}/api/leads/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return res.json();
};
