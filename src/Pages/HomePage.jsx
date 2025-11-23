import logo from "../assets/minecraft_title.png";
import MinecraftStatus from "../Components/SrvStats";
import News from './Notícias'

export default function Home(){
 

  return (
    <div className="container main-content">
      <img src={logo} alt="Neoslime" className="logo" />
      <h1>Bem-vindo ao Neoslime!</h1>
      <p className="lead">Venha participar de uma grande aventura com maquinas e magias!</p>
      <MinecraftStatus />
      <News />

    </div>
  );
}
