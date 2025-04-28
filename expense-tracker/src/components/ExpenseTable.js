import React from "react";

function ExpenseTable({ expenses, onDelete }) {
  return (
    <table style={styles.table}>
      <thead>
        <tr>
          <th style={styles.th}>Description</th>
          <th style={styles.th}>Amount ($)</th>
          <th style={styles.th}>Category</th>
          <th style={styles.th}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => (
          <tr key={expense.id} style={styles.tr}>
            <td style={styles.td}>{expense.description}</td>
            <td style={styles.td}>{expense.amount}</td>
            <td style={styles.td}>{expense.category}</td>
            <td style={styles.td}>
              <button
                onClick={() => onDelete(expense.id)}
                style={styles.deleteButton}
              >
                ❌
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

const styles = {
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "20px"
  },
  th: {
    borderBottom: "2px solid #ddd",
    padding: "12px",
    backgroundColor: "#0077ff",
    color: "white",
    textAlign: "center"
  },
  td: {
    borderBottom: "1px solid #ddd",
    padding: "10px",
    textAlign: "center"
  },
  tr: {
    transition: "background-color 0.2s",
  },
  deleteButton: {
    backgroundColor: "red",
    color: "white",
    border: "none",
    borderRadius: "8px",
    padding: "6px 12px",
    cursor: "pointer",
    fontSize: "16px"
  }
};

export default ExpenseTable;
