import HomeSidebar from "@/components/HomeSidebar";
import ChatSidebar from "@/components/ChatSidebar";
//import styles from "@/(root)/chat/chat.module.scss";
import styles from '@/(root)/favorites/favorites.module.scss';
import FavorivesSidebar from "@/components/FavorivesSidebar";
import PostCard from "@/components/PostCard";

function Page() {

    return (
        <div className="container-fluid mt-[20px]">
            <div className="row">
                <div className="col-3">
                    <HomeSidebar/>
                </div>
                <div className="col-9">
                    <FavorivesSidebar />
                    <div className={styles.wrapper} style={{borderRadius:'0 15px 15px 0'}}>
                        <div className={styles.textCenter}>
                            <div>ЗДЕСЬ КАРТИНКА ИЗБРАННОГО ТОВАРА. Вертится, радует глаз</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;
