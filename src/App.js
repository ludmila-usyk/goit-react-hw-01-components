import SocialProfile from "./components/SocialProfile/SocialProfile"
import Statistics from "./components/Statistics/Statistics"
import FriendList from "./components/FriendList/FriendList"
import TransavtionHistory from "./components/TransavtionHistory/TransactionHistory"
import styles from "./index.css"
import user from "./components/SocialProfile/user.json"
import statsData from "./components/Statistics/statistical-data.json"
import friends from "./components/FriendList/friends.json"
import transavtions from "./components/TransavtionHistory/transactions.json"


function App() {
    return (
        <div>
            <SocialProfile
                name={user.name}
                tag={user.tag}
                location={user.location}
                avatar={user.avatar}
                statsFollowers={user.stats.followers}
                statsViews={user.stats.views}
                statsLikes={user.stats.likes}
                />
            <Statistics statsData={statsData} />
            < FriendList friends={friends}/>
            < TransavtionHistory items={transavtions}/>
        </div>
    )
}

export default App