export declare enum FileImportStatus {
    Error = 1,
    Completed = 2,
    NotCompleted = 3,
    Sending = 4,
    Processing = 5,
    FailedProcessing = 6
}
export declare enum FileType {
    Teleopti = 1,
    Fieldglass = 2,
    Recruitive = 3,
    Tidomat = 4,
    Schedule = 5,
    FlexHRM = 6,
    Quinyx = 7,
    Test2 = 8,
    Looker = 9,
    Agda = 10,
    Article = 11
}
export declare type GeneralSearchTypes = "person" | "order" | "workplace" | "absenceCode" | "terminal" | "organisation";
export declare type FileImportSettingsTypes = GeneralSearchTypes | "boolean";
export interface FileImportSetting {
    type: FileImportSettingsTypes;
    name: string;
    value: string;
}
export declare enum FileImportCellType {
    Workday = 1,
    Absence = 2
}
export declare enum FileImportCellStatus {
    Error = 1,
    Sending = 2,
    Sent = 3,
    Ready = 4,
    Ignore = 5
}
export declare enum CalendarItemType {
    Workday = "Workday",
    CreditedWorkday = "CreditedWorkday",
    AbsencePeriod = "AbsencePeriod",
    AbsenceDay = "AbsenceDay"
}
export declare enum FileImportCellError {
    IpPersonDoesNotExist = 1,
    IpArticleDoesNotExist = 2,
    IpOrderDoesNotExist = 3,
    IpAbsenceCodeDoesNotExist = 4,
    IncorrectCellType = 5,
    MissingArticleMapping = 6,
    MissingPersonMapping = 7,
    MissingOrderMapping = 8,
    MissingAbsenceCodeMapping = 9,
    MissingDateFrom = 10,
    MissingDateTo = 11,
    FailedToCreateIpWorkday = 12,
    FailedToCreateIpAbsence = 13,
    WorkdayWithErrorSameDay = 14,
    FailedToCreateIpAbsencePeriod = 15,
    MissingIpObjectId = 16,
    FailedToAddIpArticles = 17,
    FailedToAttestIpWorkday = 18,
    MissingIpValidationData = 19,
    CalendarItemCollision = 20,
    FailedUpdatingExistingIpObject = 21,
    BreakOutsideWorkday = 22,
    UnsafeCell = 23
}
export declare enum TimestampDirection {
    Unknown = -1,
    In = 0,
    Out = 1,
    BreakStart = 2,
    BreakEnd = 3,
    OutAbsence = 4
}
export declare enum NotificationType {
    NOTIFICATION_NETWORK_ERROR = 0,
    NOTIFICATION_WORKDAY_NOT_FOUND = 1,
    NOTIFICATION_UNKNOWN_ERROR = 2,
    NOTIFICATION_RFID_NOT_FOUND = 3,
    NOTIFICATION_INCORRECT_NR_OF_TIMESTAMPS = 4,
    NOTIFICATION_INCORRECT_ABSENCE = 5,
    NOTIFICATION_WORKDAY_ALREADY_ATTESTED = 6,
    NOTIFICATION_TERMINAL_MISSING_ORDER_OR_WORKPLACE = 7,
    NOTIFICATION_TERMINAL_MISSING_RULES = 8
}
export declare enum BreakStyle {
    BreakMinutes = 1,
    BreakPositions = 2
}
export declare enum AbsenceOutputType {
    BreakMinutes = 1,
    SplitWorkday = 2
}
