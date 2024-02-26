import { RateController } from "./RateController";
import { RateLibrariesController } from "./RateLibraryController";
import { IRateLibraryService } from "./Services/IRateLibraryService";
import { IRateService } from "./Services/IRateService";
import { RateLibraryService } from "./Services/RateLibraryService";
import { RateService } from "./Services/RateService";

const rateLibraryService : IRateLibraryService = new RateLibraryService();
const rateLibraryController : RateLibrariesController = new RateLibrariesController(rateLibraryService);
const rateService : IRateService = new RateService();
const rateController: RateController = new RateController(rateService);

export {rateLibraryController, rateController}