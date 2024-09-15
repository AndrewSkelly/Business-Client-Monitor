// For viewing and deleting clients
export interface ServiceHistoryDetails {
  servicehistoryid: number; // `servicehistoryID` is required
  clientid: number;       // `ClientID` is required
  staffid: number;        // `StaffID` is required
  servicetype: string;    // `ServiceType` is required and must be a string
  servicedate: string;    // `ServiceDate` is required and must be a string in ISO 8601 format
}
