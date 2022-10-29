export class CustomError extends Error {
  constructor(message: string, public status: number) {
    super(message);
    this.name = "custom";
    this.status = status;
  }
}
