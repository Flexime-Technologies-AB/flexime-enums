export enum FileImportStatus {
  Error = 1,
  Completed = 2,
  NotCompleted = 3,
  Sending = 4
}
export enum FileType {
  Teleopti = 1
}
export interface FileImportSetting {
  type: string;
  name: string;
  value: string;
}
export enum FileImportCellType {
  Workday = 1,
  Absence = 2
}
export enum FileImportCellStatus {
  Error = 1,
  Sending = 2,
  Sent = 3,
  Ready = 4
}
export enum CalendarItemType {
  Workday = "Workday",
  CreditedWorkday = "CreditedWorkday",
  AbsencePeriod = "AbsencePeriod",
  AbsenceDay = "AbsenceDay"
}
export enum FileImportCellError {
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
  FailedToAttestIpWorkday = 18
}

