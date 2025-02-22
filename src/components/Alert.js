export default function Alert({ children }) {
    return (
      <div
        style={{
          padding: "12px",
          backgroundColor: "#ffe6e6",
          borderLeft: "5px solid #d9534f",
          color: "#a94442",
          margin: "20px 0",
          borderRadius: "5px",
          fontWeight: "bold",
        }}
      >
        ⚠️ {children}
      </div>
    );
  }
  