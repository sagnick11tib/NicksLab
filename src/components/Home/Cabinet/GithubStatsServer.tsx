import { getGithubStats } from '@/lib/githubconfig';
import GithubStats from './GithubStatsClient';

const GithubStatsServer = async () => {
    const { issues, prs, followers, stars } = await getGithubStats();
  return (
    <GithubStats 
        issues={issues}
        prs={prs}
        followers={followers}
        stars={stars}
    />
  )
}

export default GithubStatsServer