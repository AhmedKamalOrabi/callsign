import { EmojiSadIcon } from '@heroicons/react/solid';
import { FormattedMessage } from 'react-intl';

export default function NotFound() {
  return (
    <div>
      <EmojiSadIcon />
      <FormattedMessage
        id="routes.notFound.headline"
        defaultMessage="Not Found"
      />
    </div>
  );
}
