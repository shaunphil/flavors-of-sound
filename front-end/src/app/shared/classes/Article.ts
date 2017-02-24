export class Article {
  title: string;
  subtitle: string;
  author: string;
  intro: string;
  bodyHTML: string;

  constructor(title: string, subtitle: string, author: string, intro: string, bodyHTML: string) {
    this.title = title;
    this.subtitle = subtitle;
    this.author = author;
    this.intro = intro;
    this.bodyHTML = bodyHTML;
  }
}
