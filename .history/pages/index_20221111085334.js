import config from '../config.json'
import styled from 'styled-components'

function HomePage () {
  const estiloHomePage = { backgroundColor: 'red' }
  console.log(config.playlists)

  return (
    <>
      <CSSReset />
      <div style={estiloHomePage}>
        <Menu />
        <Header />
        <TimeLine playlists={config.playlists} />
      </div>
    </>
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
  //console.log('Dentro do componente: ', props.playlists)
  const playlistNames = Object.keys(props.playlists)
  //statement
  // retorno por expressao
  return (
    <div>
      {playlistNames.map(playlistName => {
        const videos = props.playlists[playlistName]
        console.log(playlistName)
        console.log(videos)
        return (
          <section>
            <h2>{playlistName}</h2>
            <di>
              {videos.map(video => {
                return (
                  <a href={video.url}>
                    <img src={video.thumb} />
                    <span>{video.title}</span>
                  </a>
                )
              })}
            </di>
          </section>
        )
      })}
    </div>
  )
}
