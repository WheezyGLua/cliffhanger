import { useNavigate } from "react-router-dom"
import "../styles/StartPage.css"
import { FiTrendingUp, FiServer } from "react-icons/fi"

export default function StartPage() {
  const navigate = useNavigate()
  return (
    <div className="page-container start-container">
      <div className="start-section">
        <h2 className="game-title">Cliffhanger</h2>

        <button className="btn btn-startgame" onClick={() => navigate("/game")}>
          SPELA
        </button>
      </div>

      <div className="start-section">
        <div className="highscore-container">
          <h3 className="start-score-title">HIGHSCORES</h3>
          <ul className="start-score-list">
            <li className="start-score-item">
              <p>
                <FiTrendingUp /> 523 Poäng
              </p>
              <p>
                <FiServer />7 uppdrag
              </p>
            </li>

            <li className="start-score-item">
              <p>
                <FiTrendingUp /> 523 Poäng
              </p>
              <p>
                <FiServer />7 uppdrag
              </p>
            </li>

            <li className="start-score-item">
              <p>
                <FiTrendingUp /> 523 Poäng
              </p>
              <p>
                <FiServer />7 uppdrag
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
