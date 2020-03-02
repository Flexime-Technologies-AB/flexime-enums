export enum FileImportStatus {
  Error,
  Completed,
  Sending
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
