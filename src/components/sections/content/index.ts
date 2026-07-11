/**
 * Content-Heavy Section Components
 *
 * Reusable section types optimized for long-form, content-heavy pages:
 *
 * - ContentTextSection: Left-aligned text-heavy sections
 * - ContentGridSection: Grid-based card/feature sections
 *
 * Design principles:
 * - Max-width 65-75ch for optimal readability
 * - Line-height ≥1.6 for body text
 * - Vertical spacing 120-160px between sections (desktop)
 * - Responsive typography with clamp()
 * - Background alternation support
 */

export { ContentTextSection } from "./ContentTextSection";
export { ContentGridSection } from "./ContentGridSection";
