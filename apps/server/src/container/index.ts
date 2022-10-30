class Container {
  private readonly services: Map<string, any> = new Map();

  public register<T>(name: string, service: T): void {
    this.services.set(name, service);
  }

  public get<T>(name: string): T {
    return this.services.get(name);
  }
}

export default Container;
