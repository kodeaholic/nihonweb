/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */

import React from 'react';

export default function NotFound() {
  return (
    <article
      style={{ alignItems: 'center', textAlign: 'center', width: '100%' }}
    >
      <h3 style={{ textAlign: 'center' }}>Trang không tồn tại</h3>
    </article>
  );
}
