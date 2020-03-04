export declare enum FileImportStatus {
    Error = 1,
    Completed = 2,
    NotCompleted = 3,
    Sending = 1
}
export declare enum FileType {
    Teleopti = 1
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
    Ready = 4
}
export declare enum CalendarItemType {
    Workday = "Workday",
    CreditedWorkday = "CreditedWorkday",
    AbsencePeriod = "AbsencePeriod",
    AbsenceDay = "AbsenceDay"
}
