export default class MilestoneModel {
  public id?: number;
  public title: string;
  public date: string;
  public description: string;
  public image: string;
  public userId?: number;

  constructor({
    id,
    title,
    date,
    description,
    image,
    userId,
  }: {
    id?: number;
    title: string;
    date: Date;
    description: string;
    image: string;
    userId?: number;
  }) {
    this.id = id;
    this.title = title;
    this.date = `${date}-01`;
    this.description = description;
    this.image = image;
    this.userId = userId;
  }

  public toJSON() {
    const data = {
      title: this.title,
      date: this.date,
      description: this.description,
      image: this.image,
    };

    if (this.id && this.userId) {
      return {
        id: this.id,
        ...data,
        userId: this.userId,
      };
    }

    if (this.id) {
      return {
        id: this.id,
        ...data,
      };
    }

    return {
      ...data,
      userId: this.userId,
    };
  }
}
