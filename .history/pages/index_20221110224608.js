function HomePage () {
  const estiloHomePage = {
    backgroundColor: 'red'
  }
  const mensagem = 'Bem vindo ao AluraTube'
  return {
        <div style={estiloHomePage}>
            <Menu></Menu>
            <Header></Header>
            <TimeLine></TimeLine>
      </div>
  }
}
export default HomePage

function Menu () {
  return <div> Menu </div>
}

function Header () {
  return <div> Header </div>
}
function TimeLine () {
  return <div> TimeLine </div>
}

// control + D para renomear dos
