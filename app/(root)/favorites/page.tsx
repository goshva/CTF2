import HomeSidebar from "@/components/HomeSidebar";
import ChatSidebar from "@/components/ChatSidebar";
//import styles from "@/(root)/chat/chat.module.scss";
import styles from '@/(root)/favorites/favorites.module.scss';


import PostCard from "@/components/PostCard";
import Notification from "@/components/Notification";
import FavoriteCard from "@/components/FavoriteCard";

function Page() {

    return (
        <div className="container-fluid mt-[20px]">
            <div className="row">
                <div className="col-3">
                    <HomeSidebar/>
                </div>

                <div className="col-9">
                    <div className={styles.favorites_title}>
                        <div style={{fontSize: '25px'}}>ИЗБРАННОЕ</div>
                    </div>
                    <div className={styles.container} style={{borderRadius: '15px'}}>

                        <div className={styles.textCenter}>

                            <div><FavoriteCard/></div>
                            <div><FavoriteCard/></div>
                            <div><FavoriteCard/></div>
                            <div><FavoriteCard/></div>
                            <div><FavoriteCard/></div>
                            <div><FavoriteCard/></div>
                            <div><FavoriteCard/></div>
                            <div><FavoriteCard/></div>
                            <div><FavoriteCard/></div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Page;
