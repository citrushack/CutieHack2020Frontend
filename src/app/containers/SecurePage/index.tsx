/**
 *
 * SecurePage
 *
 */

import React from 'react';
import { Link } from 'react-router-dom';
interface Props {}

export function SecurePage(props: Props) {
  return (
    <>
      <div style={{ paddingTop: '30px', textAlign: 'center' }}>
        <h1>Secure page test, using ProtectedRoute</h1>
        <p>
          <Link to="/">Back to HomePage</Link>
        </p>
      </div>{' '}
    </>
  );
}
