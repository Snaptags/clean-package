// ================================================================= //
// Copyright (c) roydukkey. All rights reserved.                     //
// ================================================================= //

import { isDeepStrictEqual } from 'util';
import type { CompiledConfig, JsonDocument } from './spec';
import { delete as dotDelete, pick, str } from 'dot-object';
import { renameSync, writeFileSync } from 'fs';


/**
 * Backs up and cleans the given JSON document using the specified configuration.
 *
 * @param source - The JSON document which should be backed up and cleaned.
 * @param config - The configuration that specifies how the JSON document should be backed up and cleaned.
 */
export const clean = (source: JsonDocument, config: CompiledConfig): void => {

	let hasChanged = false;

	// Delete keys which are not needed in release package
	config.remove.forEach((value) => {
		if (dotDelete(value, source) !== undefined && !hasChanged) {
			hasChanged = true;
		}
	});

	// Replace keys which should have different content in release package
	for (const [key, value] of Object.entries(config.replace)) {
		if (!isDeepStrictEqual(pick(key, source), value)) {
			str(key, value, source);
			hasChanged = true;
		}
	}

	if (hasChanged) {

		// Backup source file
		renameSync(config.sourcePath, config.backupPath);

		// Write changes to package
		writeFileSync(config.sourcePath, `${JSON.stringify(source, null, config.indent)}\n`);

	}

	if (config.onClean) {
		config.onClean(hasChanged, config);
	}

};
