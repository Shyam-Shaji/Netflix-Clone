import "./Player.css";
import back_arrow_icon from "../../assets/back_arrow_icon.png";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Player() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: "",
  });
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNDUxZWU0MzBmOGEyOGQ0ZjliZWY2NzZhMTEyYjVlMCIsIm5iZiI6MTc0NTA3MzA5Ny42MzY5OTk4LCJzdWIiOiI2ODAzYjNjOWU0NzUzNDI1ZWZhZDc5OTYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.xof4QCBreB4g9pb7jk432Edqb3PpwLzQ1iAAGOmAcN0",
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results[0]))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="player">
      <img
        src={back_arrow_icon}
        alt=""
        onClick={() => {
          navigate(-2);
        }}
      />
      <iframe
        src={`https://www.youtube.com/embed/${apiData.key}`}
        title="Trailer"
        allowFullScreen
        frameborder="0"
        width="90%"
        height="90%"
      ></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0, 10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  );
}
