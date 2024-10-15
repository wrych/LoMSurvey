import State from "src/models/State.js";
import AssessmentRole from "../models/AssessmentRole.js";
import { create } from "../services/assessmentRole.js";
import * as permissionService from "../services/permission.js";
export const setupAssessmentRoles = async (
  states: State[]
): Promise<AssessmentRole[]> => {
  const [draft, ready, active, review, done] = states;
  const assessee = await create({
    title: "assessee",
    description: "person being assessed",
  });
  await createPermission(assessee, draft, false, false);
  await createPermission(assessee, ready, true, false);
  await createPermission(assessee, active, true, true);
  await createPermission(assessee, review, true, false);
  await createPermission(assessee, done, true, false);
  const peer = await create({
    title: "peer",
    description: "peer of the person being assessed",
  });
  await createPermission(peer, draft, false, false);
  await createPermission(peer, ready, false, false);
  await createPermission(peer, active, false, false);
  await createPermission(peer, review, true, false);
  await createPermission(peer, done, true, false);
  const delegator = await create({
    title: "delegator",
    description: "delegator of the person being assessed",
  });
  await createPermission(delegator, draft, false, false);
  await createPermission(delegator, ready, false, false);
  await createPermission(delegator, active, false, false);
  await createPermission(delegator, review, true, false);
  await createPermission(delegator, done, true, false);
  const purpose = await create({
    title: "purposeMember",
    description: "member of the purpose team",
  });
  await createPermission(purpose, draft, false, false);
  await createPermission(purpose, ready, false, false);
  await createPermission(purpose, active, false, false);
  await createPermission(purpose, review, true, false);
  await createPermission(purpose, done, true, false);

  return [assessee, peer, delegator, purpose];
};

const createPermission = (
  role: AssessmentRole,
  state: State,
  can_view: boolean,
  can_edit: boolean
) => {
  permissionService.create({
    roleId: role.id,
    stateId: state.id,
    can_view,
    can_edit,
  });
};
