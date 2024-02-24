import { castFromTyped, definePlugin } from '@sanity-typed/types'
import { inlineSvgType } from './inlineSvgType'
import { InlineSvgPreviewComponent } from './InlineSvgPreviewComponent'
import { InlineSvgPreviewItem } from './InlineSvgPreviewItem'

export interface InlineSvgInputConfig {}

/**
 * Usage in `sanity.config.ts`
 *
 * ```ts
 * import {defineConfig} from '@sanity-typed/types'
 * import {inlineSvgInputTyped} from '@focus-reactive/sanity-plugin-inline-svg-input'
 *
 * export default defineConfig({
 *   // ...
 *   plugins: [inlineSvgInputTyped()],
 * })
 * ```
 */
const inlineSvgInputTyped = definePlugin((config: InlineSvgInputConfig | void) => {
  return {
    name: 'sanity-plugin-inline-svg-input',
    schema: {
      types: [inlineSvgType],
    },
  }
})

/**
 * Usage in `sanity.config.ts` (or .js)
 *
 * ```ts
 * import {defineConfig} from 'sanity'
 * import {inlineSvgInput} from '@focus-reactive/sanity-plugin-inline-svg-input'
 *
 * export default defineConfig({
 *   // ...
 *   plugins: [inlineSvgInput()],
 * })
 * ```
 */
const inlineSvgInput = castFromTyped(inlineSvgInputTyped)

export { inlineSvgInput, inlineSvgInputTyped, InlineSvgPreviewComponent, InlineSvgPreviewItem }
