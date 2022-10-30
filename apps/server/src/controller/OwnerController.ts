import { RequestHandler } from "express";
import OwnerService from "../service/OwnerService";

class OwnerController {
  private ownerService: OwnerService;

  constructor(ownerService: OwnerService) {
    this.ownerService = ownerService;
  }

  // "/"
  ownerList: RequestHandler = async (req, res, next) => {
    const owners = await this.ownerService.findOwners();
    res.send(owners);
  };

  ownerDetails: RequestHandler = async (req, res, next) => {
    const owners = await this.ownerService.findOwnerById(req.params.id);
    res.send(owners);
  };
}

export default OwnerController;
