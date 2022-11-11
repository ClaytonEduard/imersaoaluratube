import config from '../config.json'
import styled from 'styled-components'

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

const StyledHeader = styled.div`
  img {
    width: 80px;
    height: 80px;
  }
`
function Header () {
  return (
    <div>
      {/*<img src='Baner'></img>*/}
      <img src={`https://github.com/${config.github}.png`} />
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
