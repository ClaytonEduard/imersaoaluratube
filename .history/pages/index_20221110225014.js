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
      <img src='fotoperfil'></img>
      Clayton Eduard
      Cargo
    </div>
  )
}
function TimeLine () {
  return <div> TimeLine </div>
}

// control + D para renomear dos
