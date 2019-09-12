import { Observable } from 'rxjs';

export interface AddrOption {
  label: string;
  value: string;
  disabled?: boolean;
  checked?: boolean;
  level?: number;
}
export interface ResultOption {
  label: string;
  value: string;
  mergeName?: string;
  level?: number;
}

/**
 * 必须集成
 */
export abstract class AddressQueryService {
  abstract getListByCode(code?: string): Observable<any[]>;
  abstract getOptionByCode(code: string): Observable<any>;
}
