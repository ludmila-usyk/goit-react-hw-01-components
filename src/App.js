import SocialProfile from "./task_1/socialProfile"
import Statistics from "./task_2/Statistics"
import FriendList from "./task_3/friendList"
import TransavtionHistory from "./task_4/transactionHistory"
import styles from "./index.css"
import user from "./task_1/user.json"
import statsData from "./task_2/statistical-data.json"
import friends from "./task_3/friends.json"
import transavtions from "./task_4/transactions.json"


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