import { useState, useEffect } from "react";

export default function Noticias() {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/news")
      .then((res) => res.json())
      .then((data) => setNoticias(data));
  }, []);

  return (
    <div className="noticias">
      <h2>📰 Notícias</h2>
      {noticias.length === 0 ? (
        <p>Nenhuma notícia ainda.</p>
      ) : (
        noticias.map((n) => (
          <div key={n.id} className="noticia-card">
            <p>{n.text}</p>
            <small>{new Date(n.date).toLocaleString()}</small>
          </div>
        ))
      )}
    </div>
  );
}
