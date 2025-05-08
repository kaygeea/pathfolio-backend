export class Project {
  private id: string;
  private name: string;
  private description: string;
  private technologies: string[];

  constructor(
    id: string,
    name: string,
    description: string,
    technologies: string[],
  ) {
    this.id = this.setId(id);
    this.name = name;
    this.description = description;
    this.technologies = technologies;
  }

  setId(id: string): string {
    if (!id) {
      throw new Error('ID cannot be empty');
    }
    return id;
  }

  getId(): string {
    return this.id;
  }
}
