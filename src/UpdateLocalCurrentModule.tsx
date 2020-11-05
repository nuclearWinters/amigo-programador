import { Environment } from "react-relay";
import { commitLocalUpdate } from "react-relay";

function commitLocal(
  environment: Environment,
  name: string,
  index: number,
  id: string
) {
  return commitLocalUpdate(environment, (store) => {
    const user = store.get(id);
    const modules = user?.getLinkedRecord("currentModules");
    modules?.setValue(index, name);
  });
}

export default { commitLocal };
