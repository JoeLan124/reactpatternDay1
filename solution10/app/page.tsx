import Message from "../app/src/components/publisher/message"
import MessageBoard from "../app/src/components/subscriber/messageBoard";

export default function Home() {
  return (
    <div>
      <p>Hallo</p>
      <Message />
      <MessageBoard/>
    </div>
  );
}
