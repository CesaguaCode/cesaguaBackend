import { Router } from "express";
import OrganizationPerson from "../controllers/organizationPerson.controllers";
import OrganizationValidations from "../validations/organization_person.validations";

export default class OrganizationPersonRoutes {
  private controller: OrganizationPerson;
  private router: Router;
  private validations: OrganizationValidations;

  constructor() {
    this.controller = new OrganizationPerson();
    this.validations = new OrganizationValidations();
    this.router = Router();

    this.router.post("/", this.validations.validForm, this.controller.create);
    this.router.put("/", this.validations.validForm, this.controller.update);
    this.router.delete(
      "/:id",
      this.validations.validId,
      this.controller.deleted
    );
    this.router.get("/", this.controller.getAll);
    this.router.get("/:id", this.validations.validId, this.controller.getByid);
  }

  getRouter() {
    return this.router;
  }
}
