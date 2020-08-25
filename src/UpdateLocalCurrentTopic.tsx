import { Environment } from "react-relay";
import { commitLocalUpdate } from "react-relay";

function commitLocal(environment: Environment, index: number) {
  return commitLocalUpdate(environment, (store) => {
    const user = store.get("VXNlcjo1ZjAwZTA1NGZjMzk0ZTE0Y2QzNTE4MTQ=");
    user?.setValue(index, "currentTopic");
  });
}

export default { commitLocal };
