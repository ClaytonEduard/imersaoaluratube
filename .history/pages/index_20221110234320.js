import config from '../config.json'
import styled from 'styled-components'

function HomePage () {
  const estiloHomePage = { backgroundColor: 'red' }
  console.log(config.playlists)

  return (
    <div style={estiloHomePage}>
      <Menu />
      <Header />
      <TimeLine playlists={config.playlists} />
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
  .user-info {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px;
  }
`
function Header () {
  return (
    <StyledHeader>
      {/*<img src='Baner'></img>*/}
      <section className='user-info'>
        <img src={`https://github.com/${config.github}.png`} />
        <di>
          <h2>{config.name}</h2>
          <p>{config.job}</p>
        </di>
      </section>
    </StyledHeader>
  )
}
function TimeLine (props) {
  console.log("Dentro do componente: ", props.playlists);
  const playlistsNames =Object.keys{props.playlists};
  return (
    <div> 
    {playlistsNames}
    </div>
  )
}

