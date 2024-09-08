// For viewing and deleting clients
export interface ClientView {
    clientid: number;       // `clientid` is required
    name: string | null;    // Must be string or null nothing else
    email: string | null;   // Must be string or null nothing else
    phone: string | null;   // Must be string or null nothing else
    tags: string | null;    // Must be string or null nothing else
    notes: string | null;   // Must be string or null nothing else
  }
  
  // For adding new clients
  export interface ClientAdd {
    clientid?: number;      // `clientid` is optional and can be null, DB will handle value
    name: string | null;    // Must be string or null nothing else
    email: string | null;   // Must be string or null nothing else
    phone: string | null;   // Must be string or null nothing else
    tags: string | null;    // Must be string or null nothing else
    notes: string | null;   // Must be string or null nothing else
  }
  