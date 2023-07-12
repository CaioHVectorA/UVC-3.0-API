import { Router } from "express";
import DeleteNewsController from "../../modules/News/useCases/deleteNewsUseCase/DeleteNewsController";
import EditNewController from "../../modules/News/useCases/EditNew/EditNewController";

const deletecontroller = new DeleteNewsController()
const editcontroller = new EditNewController()
export const ChangeNewRoute = Router()

ChangeNewRoute.delete('/:id', deletecontroller.handle)
ChangeNewRoute.put('/:id', editcontroller.handle)