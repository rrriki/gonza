export class Configuration {
  public static getApiUrl(): string {
    const { NEXT_PUBLIC_API_URL } = process.env;
    return NEXT_PUBLIC_API_URL ?? "";
  }

  public static getRefreshRate(): number {
    return 5000;
  }
}
