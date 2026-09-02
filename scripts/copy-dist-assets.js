// @license
// Copyright (c) 2026 ggsuite
//
// Use of this source code is governed by terms that can be
// found in the LICENSE file in the root of this package.

// Copies the WASM module the Dart build produced next to the compiled
// TypeScript. Node does this on every platform — `cp` does not exist on
// Windows.

import { cpSync } from 'fs';

cpSync('typescript/generated/bridge-wasm.wasm', 'dist/bridge-wasm.wasm');
