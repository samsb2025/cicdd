export default function Footer() {
  return (
    <footer style={styles.footer}>
      <p>© {new Date().getFullYear()} My React App. All rights reserved.</p>
    </footer>
  );
}

const styles = {
  footer: {
    marginTop: "40px",
    padding: "30px",
    textAlign: "center",
    background: "#222",
    color: "#fff",
    fontSize: "14px",
  }
};
