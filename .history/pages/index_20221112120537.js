import config from '../config.json'
import styled from 'styled-components'
import { CSSReset } from '../src/components/CSSReset'
import Menu from '../src/components/Menu'
import { StyledTimeline } from '../src/components/Timeline'
import banner from '../src/components/img/ilya-pavlov-OqtafYT5kTw-unsplash.jpg';
function HomePage () {
  const estilosHomePage = {
    //backgroundColor: 'red'
  }
  //console.log(config.playlists)

  return (
    <>
      <CSSReset />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1
          // backgroundColor: "red",
        }}
      >
        <Menu />
        <Header />
        <Timeline playlists={config.playlists}>Conteúdo</Timeline>
      </div>
    </>
  )
}
export default HomePage

/*function Menu () {
  return <div> Menu </div>
}
*/

const StyledHeader = styled.div`
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  .user-info {
    margin-top: 50px;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px;
  }
`

const StyledBanner = styled.div`
  img{
    width: 100%;
    height:100px;
    margin-top: 55px;
  }
`

function Header () {
  return (
    (<StyledBanner>
      <div>
      <img src={`src\components\img\ilya-pavlov-OqtafYT5kTw-unsplash.jpg`} />
      </div>
    </StyledBanner>),
    <StyledHeader>
        <section className='user-info'>
          <img src={`https://github.com/${config.github}.png`} />
          <div>
            <h2>{config.name}</h2>
            <p>{config.job}</p>
          </div>
        </section>
      </StyledHeader></>
  )
}
function Timeline (propriedades) {
  const playlistNames = Object.keys(propriedades.playlists)
  //statement
  // retorno por expressao
  return (
    <StyledTimeline>
      {playlistNames.map(playlistName => {
        const videos = propriedades.playlists[playlistName]
        console.log(playlistName)
        console.log(videos)
        return (
          <section>
            <h2>{playlistName}</h2>
            <div>
              {videos.map(video => {
                return (
                  <a href={video.url}>
                    <img src={video.thumb} />
                    <span>{video.title}</span>
                  </a>
                )
              })}
            </div>
          </section>
        )
      })}
    </StyledTimeline>
  )
}
