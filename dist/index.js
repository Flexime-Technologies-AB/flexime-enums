"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileImportCellError = exports.CalendarItemType = exports.FileImportCellStatus = exports.FileImportCellType = exports.FileType = exports.FileImportStatus = void 0;
var FileImportStatus;
(function (FileImportStatus) {
    FileImportStatus[FileImportStatus["Error"] = 1] = "Error";
    FileImportStatus[FileImportStatus["Completed"] = 2] = "Completed";
    FileImportStatus[FileImportStatus["NotCompleted"] = 3] = "NotCompleted";
    FileImportStatus[FileImportStatus["Sending"] = 4] = "Sending";
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
var FileImportCellError;
(function (FileImportCellError) {
    FileImportCellError[FileImportCellError["IpPersonDoesNotExist"] = 1] = "IpPersonDoesNotExist";
    FileImportCellError[FileImportCellError["IpArticleDoesNotExist"] = 2] = "IpArticleDoesNotExist";
    FileImportCellError[FileImportCellError["IpOrderDoesNotExist"] = 3] = "IpOrderDoesNotExist";
    FileImportCellError[FileImportCellError["IpAbsenceCodeDoesNotExist"] = 4] = "IpAbsenceCodeDoesNotExist";
    FileImportCellError[FileImportCellError["IncorrectCellType"] = 5] = "IncorrectCellType";
    FileImportCellError[FileImportCellError["MissingArticleMapping"] = 6] = "MissingArticleMapping";
    FileImportCellError[FileImportCellError["MissingPersonMapping"] = 7] = "MissingPersonMapping";
    FileImportCellError[FileImportCellError["MissingOrderMapping"] = 8] = "MissingOrderMapping";
    FileImportCellError[FileImportCellError["MissingAbsenceCodeMapping"] = 9] = "MissingAbsenceCodeMapping";
    FileImportCellError[FileImportCellError["MissingDateFrom"] = 10] = "MissingDateFrom";
    FileImportCellError[FileImportCellError["MissingDateTo"] = 11] = "MissingDateTo";
    FileImportCellError[FileImportCellError["FailedToCreateIpWorkday"] = 12] = "FailedToCreateIpWorkday";
    FileImportCellError[FileImportCellError["FailedToCreateIpAbsence"] = 13] = "FailedToCreateIpAbsence";
    FileImportCellError[FileImportCellError["WorkdayWithErrorSameDay"] = 14] = "WorkdayWithErrorSameDay";
    FileImportCellError[FileImportCellError["FailedToCreateIpAbsencePeriod"] = 15] = "FailedToCreateIpAbsencePeriod";
    FileImportCellError[FileImportCellError["MissingIpObjectId"] = 16] = "MissingIpObjectId";
    FileImportCellError[FileImportCellError["FailedToAddIpArticles"] = 17] = "FailedToAddIpArticles";
    FileImportCellError[FileImportCellError["FailedToAttestIpWorkday"] = 18] = "FailedToAttestIpWorkday";
    FileImportCellError[FileImportCellError["MissingIpValidationData"] = 19] = "MissingIpValidationData";
    FileImportCellError[FileImportCellError["CalendarItemCollision"] = 20] = "CalendarItemCollision";
})(FileImportCellError = exports.FileImportCellError || (exports.FileImportCellError = {}));
