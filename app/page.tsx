'use client';

import { useVariableValue } from '@devcycle/devcycle-react-sdk';
import HomePage from './HomePage';

export default function Page() {
  const testShot = useVariableValue('test-shot', 'default value')
  return <HomePage testShot={testShot} />;
}