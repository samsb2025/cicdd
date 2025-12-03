export default function Features() {
  return (
    <div style={styles.wrapper}>
      <h2 style={styles.heading}>Features</h2>

      <div style={styles.grid}>
        <div style={styles.card}>
          <h3>⚡ Fast</h3>
          <p>Powered by Vite for instant dev server speed.</p>
        </div>

        <div style={styles.card}>
          <h3>🔥 Hot Reloading</h3>
          <p>Changes update instantly while coding.</p>
        </div>

        <div style={styles.card}>
          <h3>🧩 Modern Setup</h3>
          <p>React 18 + ES Modules + Clean project structure.</p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    padding: "60px 20px",
    textAlign: "center",
  },
  heading: {
    fontSize: "36px",
    marginBottom: "40px",
  },
  grid: {
    display: "flex",
    gap: "20px",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  card: {
    width: "260px",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "12px",
    background: "#fff",
    boxShadow: "0 4px 8px rgba(0,0,0,0.05)",
  }
};
