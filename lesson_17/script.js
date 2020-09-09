import { Page } from "./page.js";
import { ApiRequest } from "../common/utils/apiRequest.js";

const page = new Page();
page.render();
const req = new ApiRequest();
req.get("http://localhost:3000/ads");
