import Sidebar from "../components/Sidebar"
import Feed from '../components/Feed'


const Home = () => {
  return (
    <div className="home">
      <Sidebar/>
      <div className="feeds-container">
      <Feed/>
      <Feed/>
      <Feed/>
      </div>
    </div>
  )
}

export default Home
