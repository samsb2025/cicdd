export default function Hero() {
  return (
    <div style={styles.hero}>
      <h1 style={styles.title}>Welcome to My React App</h1>
      <p style={styles.subtitle}>
        This is a Vite + React frontend with clean, modern UI.
      </p>
      <button style={styles.button}>Get Started</button>
    </div>
  );
}

const styles = {
  hero: {
    textAlign: "center",
    padding: "80px 20px",
    background: "#f5f5f5"
  },
  title: {
    fontSize: "48px",
    marginBottom: "20px"
  },
  subtitle: {
    fontSize: "20px",
    marginBottom: "30px",
    color: "#555"
  },
  button: {
    padding: "12px 24px",
    fontSize: "18px",
    background: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer"
  }
};
