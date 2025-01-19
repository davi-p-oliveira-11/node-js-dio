import { disconnectDatabase, databaseType } from "./utils/database";

import * as api from "./utils/api.js";

api.getDataFromApi();
disconnectDatabase();
