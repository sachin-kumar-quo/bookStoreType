interface IBook {
  _id?: string;
  book_id?: string;
  title: string;
  author: string;
  published: string;
  publisher: string;
}

interface IAuthor {
  _id?: string;
  author_id?: string;
  name: string;
  age: number;
  phone: string;
  email: string;
}
interface IUser {
  _id?: string;
  name: string;
  email: string;
  authenticate: (password: string) => boolean;
}

export { IBook, IAuthor, IUser };
