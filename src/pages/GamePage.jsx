import "../styles/GamePage.css"

export default function GamePage() {
  return (
    <div className="page-container game-container">
      <section className="game-navbar">
        <h2 className="game-title sm">CLIFFHANGER</h2>
        <div>
          <p>348 poäng samlade</p>
          <p>7 uppgifter klarade</p>
        </div>
      </section>

      <section className="game-mission-panel">
        <div className="mission-body">
          <div className="mission-titles">
            <h3>NIVÅ 4</h3>
            <p>27 poäng</p>
          </div>
          <div className="mission-text">
            Erbjud möjlighet att ordna ett fastnummer till kunden samt ett
            riktigt bra nummer
          </div>
        </div>
      </section>

      <section className="game-navigation">
        <button className="btn">AVSLUTA</button>
        <button className="btn btn-next-task">NÄSTA</button>
      </section>
    </div>
  )
}
