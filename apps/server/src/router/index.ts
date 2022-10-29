import { Router } from "express";
import pet from "./pet";
import owner from "./owner";

export const routes = new Map<string, Router>([pet, owner]);
