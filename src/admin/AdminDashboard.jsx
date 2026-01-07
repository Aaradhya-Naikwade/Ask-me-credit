
// import { useEffect, useState } from "react";
// import { getLeads, deleteLead } from "../services/api";
// import "./Admin.css";

// const AdminDashboard = () => {
//   const [leads, setLeads] = useState([]);

//   const loadLeads = async () => {
//     try {
//       const data = await getLeads();
//       setLeads(data);
//     } catch (err) {
//       console.error("Failed to load leads", err);
//     }
//   };

//   useEffect(() => {
//     loadLeads();
//   }, []);

//   const handleDelete = async (id) => {
//     if (window.confirm("Are you sure you want to delete this lead?")) {
//       await deleteLead(id);
//       loadLeads();
//     }
//   };

//   const formatDate = (dateString) => {
//     return new Date(dateString).toLocaleString("en-IN", {
//       day: "2-digit",
//       month: "short",
//       year: "numeric",
//       hour: "2-digit",
//       minute: "2-digit"
//     });
//   };

//   return (
//     <div className="admin-dashboard">
//       <h2>Leads Dashboard</h2>

//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Phone</th>
//             <th>Loan Type</th>
//             <th>City</th>
//             <th>Date</th>
//             <th>Action</th>
//           </tr>
//         </thead>

//         <tbody>
//           {leads.length === 0 ? (
//             <tr>
//               <td colSpan="6" style={{ textAlign: "center" }}>
//                 No leads found
//               </td>
//             </tr>
//           ) : (
//             leads.map((lead) => (
//               <tr key={lead._id}>
//                 <td>{lead.fullName}</td>
//                 <td>{lead.phone}</td>
//                 <td>{lead.loanType}</td>
//                 <td>{lead.city}</td>
//                 <td>{formatDate(lead.createdAt)}</td>
//                 <td>
//                   <button
//                     onClick={() => handleDelete(lead._id)}
//                     style={{
//                       background: "#ef4444",
//                       color: "#fff",
//                       border: "none",
//                       padding: "6px 10px",
//                       borderRadius: "4px",
//                       cursor: "pointer"
//                     }}
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default AdminDashboard;






import { useEffect, useState } from "react";
import { getLeads, deleteLead } from "../services/api";
import "./Admin.css";

const AdminDashboard = () => {
  const [leads, setLeads] = useState([]);

  const loadLeads = async () => {
    try {
      const data = await getLeads();
      setLeads(data);
    } catch (err) {
      console.error("Failed to load leads", err);
    }
  };

  useEffect(() => {
    loadLeads();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this lead?")) {
      await deleteLead(id);
      loadLeads();
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    window.location.href = "/admin/login";
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  };

  return (
    <div className="admin-dashboard">
      {/* HEADER */}
      <div className="admin-header">
        <h2>Leads Dashboard</h2>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>

      {/* TABLE */}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Loan Type</th>
            <th>City</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {leads.length === 0 ? (
            <tr>
              <td colSpan="6" className="empty-state">
                No leads found
              </td>
            </tr>
          ) : (
            leads.map((lead) => (
              <tr key={lead._id}>
                <td>{lead.fullName}</td>
                <td>{lead.phone}</td>
                <td>{lead.loanType}</td>
                <td>{lead.city}</td>
                <td>{formatDate(lead.createdAt)}</td>
                <td>
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(lead._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
