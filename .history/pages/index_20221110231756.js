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
    border-radius: 50%;
  }
`
function Header () {
  return (
    <StyledHeader>
      {/*<img src='Baner'></img>*/}
      <section className='user-info'>
        <img src={`https://github.com/${config.github}.png`} />
        {config.name}
        {config.job}
      </section>
    </StyledHeader>
  )
}
function TimeLine () {
  return <div> TimeLine </div>
}

// control + D para renomear dos
