/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { HashRouter, Routes, Route } from 'react-router-dom';
import { Institutional } from './pages/Institutional';
import { Ingresso } from './pages/Ingresso';

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Institutional />} />
        <Route path="/ingresso" element={<Ingresso />} />
      </Routes>
    </HashRouter>
  );
}
