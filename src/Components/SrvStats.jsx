import { useEffect, useState } from "react";

const SERVER_HOST = "neoslime.enxada.host"; 

export default function MinecraftStatus(){
  const [status, setStatus] = useState(null);

  useEffect(()=>{
    fetch(`https://api.mcsrvstat.us/2/${SERVER_HOST}`)
      .then(r=>r.json())
      .then(setStatus)
      .catch(console.error);
  },[]);

  if(!status) return <p>Carregando status…</p>;

  return (
    <div className="status-box">
      <h2>Status do Servidor</h2>
      {status.online ? (
        <>
          <p>✅ Online</p>
          <p>Versão: {status.version}</p>
          <p>Jogadores: {status.players?.online ?? 0}/{status.players?.max ?? "-"}</p>

          {status.motd?.raw && (
            <p style={{marginTop:8}}>📢 MOTD: {status.motd.clean.join(" ")}</p>
          )}

          {status.plugins?.names && (
            <div style={{marginTop:8}}>
              <strong>🔌 Plugins:</strong>
              <ul>
                {status.plugins.names.map(p => <li key={p}>{p}</li>)}
              </ul>
            </div>
          )}
        </>
      ) : <p>❌ Servidor Offline</p>}
    </div>
  );
}
