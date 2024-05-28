interface BlogType {
  contenFileName: string
  title: string
  date: string
  author: string
  imgsrc: string
  description: string
}
export class BlogSchema {
   contenFileName: string
   title: string
   date: string
   author: string
   imgsrc: string
   description: string
  constructor(data: BlogType) {
    this.contenFileName = data.contenFileName
    this.title = data.title
    this.date = data.date
    this.author = data.author
    this.imgsrc = data.imgsrc
    this.description=data.description
  }
}
