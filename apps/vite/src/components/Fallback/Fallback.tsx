import { FormattedMessage } from 'react-intl';

export default function Fallback() {
  return (
    <FormattedMessage
      id="components.fallback.headline"
      defaultMessage="Unexpected Error"
    />
  );
}
