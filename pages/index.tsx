import YouTubeCardSubs from '../components/youtube/YouTubeCardSubs'
import YouTubeCardViews from '../components/youtube/YouTubeCardViews'
import YouTubeCardVids from '../components/youtube/YouTubeCardVids'
import GitHubCardFollowers from '../components/github/GitHubCardFollowers'
import GitHubCardProjects from '../components/github/GitHubCardProjects'
import GitHubCardForks from '../components/github/GitHubCardForks'

export default function Home() {
  return (
    <div className="container">
      <div className="Home">
        <h1>Homepage</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus natus omnis rem molestiae quo animi, aspernatur doloremque velit suscipit reprehenderit.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus natus omnis rem molestiae quo animi, aspernatur doloremque velit suscipit reprehenderit.</p>
      </div>
      <div className="rows">
        <div className="row">
          <YouTubeCardSubs />
        </div>
        <div className="row">
          <YouTubeCardViews />
        </div>
        <div className="row">
          <YouTubeCardVids />
        </div>

      </div>
      
      <div className="rows">
        <div className="row">
          <GitHubCardFollowers />
        </div>
        <div className="row">
          <GitHubCardProjects />
        </div>
        <div className="row">
          <GitHubCardForks />
        </div>
      </div>

    </div>
  )
}
