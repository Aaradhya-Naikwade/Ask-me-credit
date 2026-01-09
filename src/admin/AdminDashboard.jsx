import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getLeads,
  updateLeadStatus,
  deleteLead
} from "../services/adminApi";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchLeads = async () => {
    try {
      const data = await getLeads();
      setLeads(data);
    } catch (err) {
      setError("Session expired. Please login again.");
      localStorage.removeItem("adminToken");
      navigate("/admin/login");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  const handleStatusChange = async (id, currentStatus) => {
    const newStatus = currentStatus === "Active" ? "Inactive" : "Active";

    await updateLeadStatus(id, newStatus);
    setLeads((prev) =>
      prev.map((lead) =>
        lead._id === id ? { ...lead, status: newStatus } : lead
      )
    );
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this lead?")) return;

    await deleteLead(id);
    setLeads((prev) => prev.filter((lead) => lead._id !== id));
  };

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin/login");
  };

  if (loading) {
    return <p style={{ textAlign: "center" }}>Loading...</p>;
  }

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2>Admin Dashboard</h2>
        <button onClick={handleLogout} style={styles.logout}>
          Logout
        </button>
      </div>

      {error && <p style={styles.error}>{error}</p>}

      <table style={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Mobile</th>
            <th>Loan Type</th>
            <th>City</th>
            <th>Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {leads.map((lead) => (
            <tr key={lead._id}>
              <td>{lead.fullName}</td>
              <td>{lead.phone}</td>
              <td>{lead.loanType}</td>
              <td>{lead.city}</td>
              <td>{new Date(lead.createdAt).toLocaleString()}</td>
              <td>
                <button
                  onClick={() =>
                    handleStatusChange(lead._id, lead.status)
                  }
                  style={{
                    ...styles.statusBtn,
                    background:
                      lead.status === "Active" ? "#22c55e" : "#ef4444"
                  }}
                >
                  {lead.status}
                </button>
              </td>
              <td>
                <button
                  onClick={() => handleDelete(lead._id)}
                  style={styles.delete}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  container: {
    padding: "30px"
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px"
  },
  logout: {
    padding: "8px 14px",
    background: "#ef4444",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer"
  },
  table: {
    width: "100%",
    borderCollapse: "collapse"
  },
  statusBtn: {
    padding: "6px 10px",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer"
  },
  delete: {
    padding: "6px 10px",
    background: "#111827",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer"
  },
  error: {
    color: "red",
    marginBottom: "10px"
  }
};

export default AdminDashboard;
