import './ChatSection.scss'
import classNames from 'classnames'
import UserList from "@/components/UserList";
import ChatWindow from "@/components/ChatWindow";

const ChatSection = (props) => {
    const {
        className,
    } = props

    return (
        <div
            className={classNames(className, 'chat-section')}
        >
            <UserList />
            <ChatWindow />
        </div>
    )
}

export default ChatSection