import { LeftContentBlock } from './LeftContentBlock';
import { RightContextBlock } from './RightContentBlock';

import { ContentBlockProps } from './types';

export function ContentBlock(props: ContentBlockProps) {
  if (props.type === 'left') return <LeftContentBlock {...props} />;
  if (props.type === 'right') return <RightContextBlock {...props} />;
  return null;
}
