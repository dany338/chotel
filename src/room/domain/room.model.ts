export interface RoomModel {
  id?: number;
  type: string;
  beds: number;
  code: string;
  reservations?: any[];
}
