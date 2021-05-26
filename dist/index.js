"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbsenceOutputType = exports.BreakStyle = exports.NotificationType = exports.TimestampDirection = exports.FileImportCellError = exports.CalendarItemType = exports.FileImportCellStatus = exports.FileImportCellType = exports.FileType = exports.FileImportStatus = void 0;
var FileImportStatus;
(function (FileImportStatus) {
    FileImportStatus[FileImportStatus["Error"] = 1] = "Error";
    FileImportStatus[FileImportStatus["Completed"] = 2] = "Completed";
    FileImportStatus[FileImportStatus["NotCompleted"] = 3] = "NotCompleted";
    FileImportStatus[FileImportStatus["Sending"] = 4] = "Sending";
    FileImportStatus[FileImportStatus["Processing"] = 5] = "Processing";
    FileImportStatus[FileImportStatus["FailedProcessing"] = 6] = "FailedProcessing";
})(FileImportStatus = exports.FileImportStatus || (exports.FileImportStatus = {}));
var FileType;
(function (FileType) {
    FileType[FileType["Teleopti"] = 1] = "Teleopti";
    FileType[FileType["Fieldglass"] = 2] = "Fieldglass";
    FileType[FileType["Recruitive"] = 3] = "Recruitive";
    FileType[FileType["Tidomat"] = 4] = "Tidomat";
    FileType[FileType["Schedule"] = 5] = "Schedule";
    FileType[FileType["FlexHRM"] = 6] = "FlexHRM";
    FileType[FileType["Quinyx"] = 7] = "Quinyx";
    FileType[FileType["Test2"] = 8] = "Test2";
    FileType[FileType["Transcom"] = 9] = "Transcom";
    FileType[FileType["Agda"] = 10] = "Agda";
    FileType[FileType["Article"] = 11] = "Article";
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
    FileImportCellStatus[FileImportCellStatus["Ignore"] = 5] = "Ignore";
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
    FileImportCellError[FileImportCellError["FailedUpdatingExistingIpObject"] = 21] = "FailedUpdatingExistingIpObject";
    FileImportCellError[FileImportCellError["BreakOutsideWorkday"] = 22] = "BreakOutsideWorkday";
})(FileImportCellError = exports.FileImportCellError || (exports.FileImportCellError = {}));
var TimestampDirection;
(function (TimestampDirection) {
    TimestampDirection[TimestampDirection["Unknown"] = -1] = "Unknown";
    TimestampDirection[TimestampDirection["In"] = 0] = "In";
    TimestampDirection[TimestampDirection["Out"] = 1] = "Out";
    TimestampDirection[TimestampDirection["BreakStart"] = 2] = "BreakStart";
    TimestampDirection[TimestampDirection["BreakEnd"] = 3] = "BreakEnd";
    TimestampDirection[TimestampDirection["OutAbsence"] = 4] = "OutAbsence";
})(TimestampDirection = exports.TimestampDirection || (exports.TimestampDirection = {}));
var NotificationType;
(function (NotificationType) {
    NotificationType[NotificationType["NOTIFICATION_NETWORK_ERROR"] = 0] = "NOTIFICATION_NETWORK_ERROR";
    NotificationType[NotificationType["NOTIFICATION_WORKDAY_NOT_FOUND"] = 1] = "NOTIFICATION_WORKDAY_NOT_FOUND";
    NotificationType[NotificationType["NOTIFICATION_UNKNOWN_ERROR"] = 2] = "NOTIFICATION_UNKNOWN_ERROR";
    NotificationType[NotificationType["NOTIFICATION_RFID_NOT_FOUND"] = 3] = "NOTIFICATION_RFID_NOT_FOUND";
    NotificationType[NotificationType["NOTIFICATION_INCORRECT_NR_OF_TIMESTAMPS"] = 4] = "NOTIFICATION_INCORRECT_NR_OF_TIMESTAMPS";
    NotificationType[NotificationType["NOTIFICATION_INCORRECT_ABSENCE"] = 5] = "NOTIFICATION_INCORRECT_ABSENCE";
    NotificationType[NotificationType["NOTIFICATION_WORKDAY_ALREADY_ATTESTED"] = 6] = "NOTIFICATION_WORKDAY_ALREADY_ATTESTED";
    NotificationType[NotificationType["NOTIFICATION_TERMINAL_MISSING_ORDER_OR_WORKPLACE"] = 7] = "NOTIFICATION_TERMINAL_MISSING_ORDER_OR_WORKPLACE";
    NotificationType[NotificationType["NOTIFICATION_TERMINAL_MISSING_RULES"] = 8] = "NOTIFICATION_TERMINAL_MISSING_RULES";
})(NotificationType = exports.NotificationType || (exports.NotificationType = {}));
var BreakStyle;
(function (BreakStyle) {
    BreakStyle[BreakStyle["BreakMinutes"] = 1] = "BreakMinutes";
    BreakStyle[BreakStyle["BreakPositions"] = 2] = "BreakPositions";
})(BreakStyle = exports.BreakStyle || (exports.BreakStyle = {}));
var AbsenceOutputType;
(function (AbsenceOutputType) {
    AbsenceOutputType[AbsenceOutputType["BreakMinutes"] = 1] = "BreakMinutes";
    AbsenceOutputType[AbsenceOutputType["SplitWorkday"] = 2] = "SplitWorkday";
})(AbsenceOutputType = exports.AbsenceOutputType || (exports.AbsenceOutputType = {}));
