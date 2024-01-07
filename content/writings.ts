export interface ArticleProps {
  link: string;
  title: string;
  description: string;
  date: string;
}

export const articles: ArticleProps[] = [
  // {
  //   title: 'Effortless Efficiency: Streamline Your Code with the Magic of Higher Order Functions',
  //   description: "Dive into the world of coding optimization with our blog, \"Effortless Efficiency: Streamline Your Code with the Magic of Higher Order Functions.\" Uncover the secrets of reducing code complexity and enhancing readability through the art of Higher Order Functions (HOFs). Spice up your computer life with our easy-to-follow blog on jazzing up EndeavorOS using Hyprland. No tech jargon, just simple steps to turn your digital space into a uniquely stylish haven.",
  //   date: 'January 5, 2024',
  //   link: '/writings/efficient-hof'
  // },
  // {
  //   title: 'JavaScript: Updating object inside an array',
  //   description: 'When working with a dynamic poll feature in your app, managing the state of individual options can be tricky. A practical approach is to use an array of objects to represent each poll option. This way, you can easily accommodate any number of options without hardcoding them into your application.',
  //   date: 'January 6, 2024',
  //   link: '/writings/updating-object-in-array'
  // },
  {
    title: 'Hello, world!',
    description: "Hello, and welcome to my first blog! I appreciate your understanding if my writing skills aren't perfect yet. In the future, I aim to share my learning experiences and delve into the exciting world of technology that I love tinkering with. Thank you for stopping by!",
    date: 'January 6, 2024',
    link: '/writings/hello-world'
  }
]
