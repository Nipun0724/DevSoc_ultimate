import { AI } from "@/app/action";
import { Chat } from "@/components/llm/chat";
import { AICrypto } from "./action-crypto";

const Home = () => {
  return (
    <AICrypto>
      <main className="">
        <Chat />
      </main>
    </AICrypto>
  );
}
export default Home;