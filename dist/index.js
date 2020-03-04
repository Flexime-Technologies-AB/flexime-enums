"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalendarItemType = exports.FileImportCellStatus = exports.FileImportCellType = exports.FileType = exports.FileImportStatus = void 0;
var FileImportStatus;
(function (FileImportStatus) {
    FileImportStatus[FileImportStatus["Error"] = 1] = "Error";
    FileImportStatus[FileImportStatus["Completed"] = 2] = "Completed";
    FileImportStatus[FileImportStatus["NotCompleted"] = 3] = "NotCompleted";
    FileImportStatus[FileImportStatus["Sending"] = 1] = "Sending";
})(FileImportStatus = exports.FileImportStatus || (exports.FileImportStatus = {}));
var FileType;
(function (FileType) {
    FileType[FileType["Teleopti"] = 1] = "Teleopti";
})(FileType = exports.FileType || (exports.FileType = {}));
var FileImportCellType;
(function (FileImportCellType) {
    FileImportCellType[FileImportCellType["Workday"] = 1] = "Workday";
    FileImportCellType[FileImportCellType["Absence"] = 2] = "Absence";
})(FileImportCellType = exports.FileImportCellType || (exports.FileImportCellType = {}));
var FileImportCellStatus;
(function (FileImportCellStatus) {
    FileImportCellStatus[FileImportCellStatus["Error"] = 1] = "Error";
    FileImportCellStatus[FileImportCellStatus["Sending"] = 2] = "Sending";
    FileImportCellStatus[FileImportCellStatus["Sent"] = 3] = "Sent";
    FileImportCellStatus[FileImportCellStatus["Ready"] = 4] = "Ready";
})(FileImportCellStatus = exports.FileImportCellStatus || (exports.FileImportCellStatus = {}));
var CalendarItemType;
(function (CalendarItemType) {
    CalendarItemType["Workday"] = "Workday";
    CalendarItemType["CreditedWorkday"] = "CreditedWorkday";
    CalendarItemType["AbsencePeriod"] = "AbsencePeriod";
    CalendarItemType["AbsenceDay"] = "AbsenceDay";
})(CalendarItemType = exports.CalendarItemType || (exports.CalendarItemType = {}));
