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
    Test2 = 8
}
export interface FileImportSetting {
    type: string;
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
    FailedUpdatingExistingIpObject = 21
}
export declare enum TimestampDirection {
    Unknown = -1,
    In = 0,
    Out = 1,
    BreakStart = 2,
    BreakEnd = 3,
    OutAbsence = 4
}
