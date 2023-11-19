import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'reac-chat-engine-advanced'
const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        '9c73d875-3991-4493-8bf3-c0f377629745',
        props.user.username,
        props.user.secret );
   
    return < div style={{ height: '100vh' }}>
        <MultiChatSocket {...chatProps} />
        <MultiChatWindow {...chatProps} style={{ height: '100%' }} />
    </div >
  }


export default ChatsPage
