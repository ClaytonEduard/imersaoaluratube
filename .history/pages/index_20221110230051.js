import config from "../config.json";

function HomePage () {
  const estiloHomePage = {
    backgroundColor: 'red'
  }
  return (
    <div style={estiloHomePage}>
      <Menu />
      <Header />
      <TimeLine />
    </div>
  )
}
export default HomePage

function Menu () {
  return <div> Menu </div>
}

function Header () {
  return (
    <div>
      <img src='Baner'></img>
      <img src={`https://github.com/${config.github}.png`}  />
      {config.name}
      {config.job}
      Cargo
    </div>
  )
}
function TimeLine () {
  return <div> TimeLine </div>
}

// control + D para renomear dos