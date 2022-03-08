import axios from "axios";
import { Configuration } from "../configuration";

export interface SalaryStatistics {
  min: number;
  max: number;
  avg: number;
  employees: Array<{ id: string; name: string; salary: number }>;
}
export class DepartmentService {
  private static url = Configuration.getApiUrl();

  public static async getDepartmentSalaryStatistics(
    department: string
  ): Promise<SalaryStatistics> {
    const res = await axios.get(`${this.url}/employees/${department}/salaries`);
    return res.data;
  }
}
