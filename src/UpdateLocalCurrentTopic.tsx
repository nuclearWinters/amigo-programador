import { Environment } from "react-relay";
import { commitLocalUpdate } from "react-relay";

function commitLocal(environment: Environment, topic: string, id: string) {
  return commitLocalUpdate(environment, (store) => {
    const user = store.get(id);
    user?.setValue(topic, "currentTopic");
  });
}

export default { commitLocal };
