import { ArticleProps } from '../content/writings'
import WritingItem from './writing-item';

interface WritingItemListProps {
  writings: ArticleProps[]
}

export default function WritingItemList({ writings }: WritingItemListProps) {
  return writings.map(writing => <WritingItem title={writing.title} description={writing.description} date={writing.date} link={writing.link}/>);
}
