import TractDetails from "../Components/TractDetails";

function Show() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      <h2 style={{ marginBottom: 20 }}>Show</h2>
      <section>
        <TractDetails />
      </section>
    </div>
  );
}

export default Show;
